import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() username: string = '';

  @Output() onAlert = new EventEmitter();
  executeEvent() {
    this.onAlert.emit('Data from child');
  }
}
