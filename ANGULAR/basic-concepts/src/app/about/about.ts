import { Component } from '@angular/core';
import { User } from '../user/user';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  imports: [User, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  data: string = 'Max Miller';
  email: string = '';
  password: string = '';

  showAlert(event: string) {
    alert(event);
  }

  login() {
    alert(`Email: ${this.email}, password: ${this.password}`);
  }
}
