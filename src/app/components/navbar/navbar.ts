import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  logout() {
    // Aquí podrías limpiar datos de sesión si los tuvieras
    this.router.navigate(['/login']);
  }
}
