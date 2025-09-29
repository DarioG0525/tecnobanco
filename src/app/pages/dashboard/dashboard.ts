import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa las clases exportadas por cada componente (rutas relativas)
import { NavbarComponent } from '../../components/navbar/navbar';
import { CardComponent } from '../../../app/components/card/card';
import { MovementsComponent } from '../../components/movements/movements';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardComponent, MovementsComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {}
