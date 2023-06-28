import { LoginService } from '../../shared/Services/login.service';
import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './models/loginRequest.model';
import { LoginResponse } from './models/loginResponse.model';
import { LogoutService } from '../../shared/Services/logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = 'kminchelle';
  public password: string = '0lelplR';
  public loggedIn: boolean = false;

  constructor(private loginService: LoginService, private logoutService: LogoutService) { }

  ngOnInit() {
    this.checkLoginStatus();

    this.logoutService.isLogout$.subscribe((isLogout: boolean) => {
      if (isLogout) {
        this.loggedIn = false;
      }
    });
  }

  public onSubmit() {
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password
    };
    this.login(loginRequest);
  }

  private login(loginRequest: LoginRequest) {
    this.loginService.login(loginRequest).subscribe((data: LoginResponse) => {
      console.log(data);
      this.loggedIn = true;
    });
  }

  private checkLoginStatus(): void {
    const token = sessionStorage.getItem('token-app');
    this.loggedIn = token !== null;
  }
}
