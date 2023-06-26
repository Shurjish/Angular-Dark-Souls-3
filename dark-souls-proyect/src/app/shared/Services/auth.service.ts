import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject: Subject<boolean> = new Subject<boolean>();

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {}

  public setAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  public logout(): void {
    sessionStorage.removeItem('token-app');
    this.setAuthenticated(false);
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }
}
