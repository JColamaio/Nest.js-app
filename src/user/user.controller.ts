import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Patch,
  Delete,
} from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./dto/createUserDto";
import { UserService } from "./user.service";
import { identity } from "rxjs";
import { CommentService } from "src/comment/comment.service";

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService
  ) {}

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.userService.findOne(id);
  }
  @Get(":id/comments")
  getUserComment(@Param("id") id: string) {
    return this.commentService.findUserComments(id);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Put(":id")
  update(@Param("id") id:number, @Body() UpdateUserDto:UpdateUserDto){
    return this.userService.update(id, UpdateUserDto)
  }
  // @Delete()
}
