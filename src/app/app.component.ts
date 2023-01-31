import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private userService: UserService
  ) {}

  get activeUsers(): User[] {
    return this.userService.activeUsers;
  }

  get inactiveUsers(): User[] {
    return this.userService.inactiveUsers;
  }

  

}
