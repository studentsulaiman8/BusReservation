import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private location: any;
constructor(public loginService: LoginService) {
}
ngOnInit() {
}

message: string;
username: string = 'Admin';
password: string = 'admin';

  verifyUser(username, password) {
  if (username === this.username && password === this.password) {
    this.loginService.username = username;
    this.location.back();
    this.loginService.logged = true
  } else {
    this.message = 'Invalid credentials'
  }
}
}
