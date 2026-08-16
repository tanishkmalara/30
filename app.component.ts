import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello {{ name }}</h1>
  `
})
export class AppComponent {

  name: string;

  constructor(private userService: UserService) {
    this.name = this.userService.getUserName();
  }

}
