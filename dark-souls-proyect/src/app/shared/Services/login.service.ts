import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginRequest } from 'src/app/pages/login/models/loginRequest.model';
import { LoginResponse } from './../../pages/login/models/loginResponse.model';
import { LogoutService } from './logout.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = sessionStorage.getItem('token-app');

  constructor(
    private httpClient: HttpClient,
    private logoutService: LogoutService
  ) { }

  login(loginRequest: LoginRequest) {
    return this.httpClient.post<LoginResponse>('https://dummyjson.com/auth/login', loginRequest)
      .pipe(
        map((response: LoginResponse) => {
          this.token = response.token;
          sessionStorage.setItem('token-app', response.token);
          this.logoutService.setLogout(true);
          return response;
        })
      );
  }
}
