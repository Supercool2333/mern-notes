import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppendPipe } from '../pipes/append-pipe';
import { Api } from '../services/api';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-home',
  imports: [NgClass, FormsModule, DatePipe, AppendPipe, UpperCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title: string = 'Basic Concepts of Angular';
  imgUrl: string = 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';
  titleColor: string = 'red';
  count: number = 0;
  username: string = '';
  styleClass: string = 'pStyle textColor';
  userAddress: string = 'AVD PO 762873565';
  userStatus: boolean = false;
  userList: string[] = ['Max', 'ken', 'Luca', 'Christ', 'Leo'];
  today: Date = new Date();
  allpost: Post[] = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.showPost();
  }

  showPost() {
    this.api.getAllPost().subscribe((res: any) => {
      console.log(res);
      this.allpost = res;
    });
  }

  showService() {
    alert(this.api.serviceData);
  }

  increment() {
    this.count++;
  }

  showAlert(data: string) {
    alert(data);
  }

  getUsername(event: any) {
    console.log(event.target.value);
    this.username = event.target.value;
  }

  getUser(tag: any) {
    if (tag.value) {
      alert(`Designation: ${tag.value}`);
    } else {
      alert('Please fill!!!');
    }
  }
}
