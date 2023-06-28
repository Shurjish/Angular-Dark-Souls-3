import { Component } from '@angular/core';
import { LogoutService } from '../../Services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loggedIn: boolean = false;

  constructor(private logoutService: LogoutService) {}

  ngOnInit() {
    this.checkLoginStatus();

    this.logoutService.isLogout$.subscribe((isLogout: boolean) => {
      this.loggedIn = isLogout;
    });
  }

  onLogout(): void {
    this.logoutService.logout();
  }

  private checkLoginStatus(): void {
    const token = sessionStorage.getItem('token-app');
    this.loggedIn = token !== null;
  }
}
