import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('')
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
    return this.todoService.create(todo)
  }

  @Post("updateStatus/:id")
  updateDoneStatus(@Param() id: number, @Body() doneStatus) {
    return this.todoService.updateDoneStatus(id, doneStatus);
  }
}
