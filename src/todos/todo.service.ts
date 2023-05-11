import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './interfaces/todo.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 0, title: 'Code', done: false },
    { id: 1, title: 'Do the dishes', done: true },
    { id: 2, title: 'Make coffee', done: false },
    { id: 3, title: 'Walk the dog', done: false },
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

  createTodo(todo: CreateTodoDto) {
    this.todos.push({
      id: this.todos.length,
      title: todo.title,
      done: todo.done,
    });

    return this.todos.at(-1);
  }

  updateTodo(id: number, todo: UpdateTodoDto) {
    this.todos[id].done = todo.done;
    this.todos[id].title = todo.title;

    return this.todos[id];
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    return `Deleted todo of ID #${id}`;
  }
}
