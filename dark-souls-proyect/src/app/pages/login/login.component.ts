import { LoginService } from '../../shared/Services/login.service';
import { Component } from '@angular/core';
import { LoginRequest } from './models/loginRequest.model';
import { LoginResponse } from './models/loginResponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string = 'kminchelle';
  public password: string = '0lelplR';
  public loggedIn: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loggedIn = !!this.loginService.token;
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

  public onLogout() {
    this.loginService.logout();
    this.loggedIn = false;
  }

  public resetForm() {
    this.username = 'kminchelle';
    this.password = '0lelplR';
    this.loggedIn = false;
  }
}
