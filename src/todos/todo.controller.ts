import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

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

  @Post()
  create(@Body() todo: CreateTodoDto) {
    return this.todoService.create(todo);
  }

  @Put('update/:id')
  updateTodo(@Param('id') id: number, @Body() todo: UpdateTodoDto) {
    return this.todoService.updateTodo(id, todo);
  }

  @Delete('delete/:id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
