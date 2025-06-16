import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginWithGoogle() {
    // Simular login com Google
    console.log('Login with Google');
    this.router.navigate(['/home']);
  }

  loginWithGithub() {
    // Simular login com Github
    console.log('Login with Github');
    this.router.navigate(['/home']);
  }

  loginWithEmail() {
    // Simular login com Email
    console.log('Login with Email');
    this.router.navigate(['/home']);
  }
}
