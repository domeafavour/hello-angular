import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoModule } from './components/add-todo/add-todo.module';
import { LogoComponent } from './components/logo/logo.component';
import { TodoListItemModule } from './components/todo-list-item/todo-list-item.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';

let id = 0;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function createTodo(title: string, completed = false): Todo {
  return { id: id++, title, completed: false };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LogoComponent,
    TodoListComponent,
    TodoListItemModule,
    AddTodoModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'hello-angular';
  todos: Todo[] = [
    createTodo('Buy milk'),
    createTodo('Buy eggs', true),
    createTodo('Buy bread'),
  ];

  onToggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  onAddTodo(text: string) {
    this.todos.push(createTodo(text));
  }

  onDeleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
}
