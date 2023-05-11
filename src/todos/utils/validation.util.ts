import { BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { BaseTodoDto } from '../dto/base-todo.dto';

export class ValidationUtil {
  static async isValidRequestBody(todo: BaseTodoDto<UpdateTodoDto | CreateTodoDto>) {
    const todoClass = plainToClass(BaseTodoDto, todo);
    const errors = await validate(todoClass);
    if (errors.length > 0) return false;
    return true;
  }
}