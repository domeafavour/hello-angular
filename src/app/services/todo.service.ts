import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

let id = 0;

function createTodo(title: string, completed = false): Todo {
  return { id: id++, title, completed };
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    createTodo('Buy milk'),
    createTodo('Buy eggs', true),
    createTodo('Buy bread'),
  ];

  constructor() {}

  toggleCompleted(id: number) {
    this.todos = this.todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
  }

  addTodo(text: string) {
    this.todos.push(createTodo(text));
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
