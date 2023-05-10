import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
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

  findById(id: number) {
    return this.todos[id];
  }

  create(todo: CreateTodoDto) {
    return this.todos.push({
      id: this.todos.length,
      title: todo.title,
      done: todo.done,
    });
  }

  updateTodo(id: number, todo: UpdateTodoDto) {
    this.todos[id].done = todo.done;
    this.todos[id].title = todo.title;

    return this.todos[id];
  }

  deleteTodo(id: number) {
    return this.todos.splice(id, 1);
  }
}
