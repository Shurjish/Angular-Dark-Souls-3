import { LoginService } from '../../shared/Services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from './models/loginRequest.model';
import { LoginResponse } from './models/loginResponse.model';
import { LogoutService } from '../../shared/Services/logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loggedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private logoutService: LogoutService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['kminchelle', Validators.required],
      password: ['0lelplR', Validators.required]
    });
  }

  ngOnInit() {
    this.checkLoginStatus();

    this.logoutService.isLogout$.subscribe((isLogout: boolean) => {
      if (isLogout) {
        this.loggedIn = false;
      }
    });
  }

  public onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const loginRequest: LoginRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
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
