import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menuValue: boolean = false
  menu_icon: string = 'bi bi-list'


  openMenu() {
  this.menuValue = !this.menuValue
    this.menu_icon = this.menuValue ? 'bi bi-x':'bi bi-list'
  }

  constructor(public loginService: LoginService) {
  }
  // logout() {
  //   this.loginService.logged =  false;
  //   this.loginService.username= ''
  // }
}
