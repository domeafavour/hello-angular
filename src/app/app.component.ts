import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoModule } from './components/add-todo/add-todo.module';
import { LogoComponent } from './components/logo/logo.component';
import { TodoListItemModule } from './components/todo-list-item/todo-list-item.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
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
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Buy eggs', completed: true },
    { id: 3, title: 'Buy bread', completed: false },
  ];

  onToggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  onAddTodo(text: string) {
    const id = this.todos.length + 1;
    this.todos.push({ id, title: text, completed: false });
  }
}
