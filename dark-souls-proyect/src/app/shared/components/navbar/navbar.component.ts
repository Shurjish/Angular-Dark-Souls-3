import { Component } from '@angular/core';
import { LogoutService } from '../../Services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loggedIn: boolean = false;

  constructor(private authService: LogoutService) {}

  ngOnInit() {
    this.authService.isLogout$.subscribe((isLogout: boolean) => {
      this.loggedIn = isLogout;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
