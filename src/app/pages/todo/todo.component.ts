import { Component } from '@angular/core';
import { AddTodoModule } from '../../components/add-todo/add-todo.module';
import { TodoListItemModule } from '../../components/todo-list-item/todo-list-item.module';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoListComponent, TodoListItemModule, AddTodoModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.less',
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.todos;
  }

  onToggleCompleted(todo: Todo) {
    this.todoService.toggleCompleted(todo.id);
  }

  onAddTodo(text: string) {
    this.todoService.addTodo(text);
  }

  onDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
