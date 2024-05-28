import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, MatInputModule, MatButtonModule, MatProgressSpinnerModule, FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  isLogin: boolean = true;
  authForm: NgForm | null = null;
  isLoading: boolean = false;
  error: string = '';


  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLogin) {
      this.authService.login(email, password);
      this.isLoading = false;
    } else {
      this.authService.signup(email, password);
      this.isLoading = false;
    }
    form.reset();
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

}
