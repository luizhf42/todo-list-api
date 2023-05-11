import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ValidationUtil } from './utils/validation.util';

@Controller('/')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get('done')
  findAllDone(): Todo[] {
    return this.todoService.findAllDone();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    const todo = this.todoService.findById(id);
    if (todo) return todo;
    throw new NotFoundException('Inexistent todo');
  }

  @Post()
  async create(@Body() todo: CreateTodoDto) {
    if (await ValidationUtil.isValidRequestBody(todo)) return this.todoService.createTodo(todo);
    throw new BadRequestException("Invalid todo body");
  }

  @Put('update/:id')
  async updateTodo(@Param('id') id: number, @Body() todo: UpdateTodoDto) {
    if (await ValidationUtil.isValidRequestBody(todo)) return this.todoService.updateTodo(id, todo);
    throw new BadRequestException("Invalid todo body");
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id: number) {
    const todo = this.todoService.findById(id);
    if (todo) return this.todoService.deleteTodo(id);
    throw new NotFoundException('Inexistent todo');
  }
}
