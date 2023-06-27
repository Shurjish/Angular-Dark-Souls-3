import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private isLogoutSubject: Subject<boolean> = new Subject<boolean>();

  public isLogout$ = this.isLogoutSubject.asObservable();

  constructor(private router: Router) {}

  public setLogout(isLogout: boolean): void {
    this.isLogoutSubject.next(isLogout);
  }

  public logout(): void {
    sessionStorage.removeItem('token-app');
    this.setLogout(false);
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }
}
