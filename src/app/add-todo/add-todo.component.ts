import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.less',
})
export class AddTodoComponent {
  @Output() onAddTodo = new EventEmitter<string>();

  text = '';

  onInputChange(e: Event) {
    this.text = (e.target as HTMLInputElement).value;
  }

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.onAddTodo.emit(this.text);
    this.text = '';
  }
}
