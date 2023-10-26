import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity("users")
export class User{
    // Generates automatically primary key for ID
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true,nullable:false})
    name:string;

    @Column({nullable:false, unique:true})
    email:string;

    @Column({nullable:false,})
    password:string;

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password,10)
    }
}