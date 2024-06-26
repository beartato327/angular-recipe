import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  isAuthenticated = false;

  auth = getAuth();
  user = this.authService.user;

  ngOnInit() {
    this.authService.authStatusListener();

  }

  logout() {
    this.authService.logout();
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
