import { IsEmail, IsNumberString, IsString, isString } from "class-validator";
import { PartialType } from '@nestjs/swagger'
export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password:string
}

export class UpdateUserDto extends PartialType(CreateUserDto){}