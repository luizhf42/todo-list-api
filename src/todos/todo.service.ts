import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Code', done: false },
    { id: 2, title: 'Do the dishes', done: true },
    { id: 3, title: 'Make coffee', done: false },
    { id: 4, title: 'Walk the dog', done: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findAllDone(): Todo[] {
    return this.todos.filter((todo) => todo.done);
  }

  create(todo: CreateTodoDto) {
    return this.todos.push({
      id: this.todos.length,
      title: todo.title,
      done: todo.done,
    });
  }

  updateDoneStatus(id: number, done: boolean) {
    return this.todos[id].done = done;
  }
}
