import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

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
    TodoListItemComponent,
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
}
