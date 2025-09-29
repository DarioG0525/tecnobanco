import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Movement {
  date: string;
  description: string;
  amount: string;
  type: 'positive' | 'negative';
}

@Component({
  selector: 'app-movements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movements.html',
  styleUrls: ['./movements.css']
})
export class MovementsComponent {
  movements: Movement[] = [
    { date: '15/07/2024', description: 'Compra en supermercado', amount: '-$45.20', type: 'negative' },
    { date: '14/07/2024', description: 'Pago de nómina', amount: '+$1,500.00', type: 'positive' },
    { date: '12/07/2024', description: 'Transferencia a Juan', amount: '-$100.00', type: 'negative' },
    { date: '10/07/2024', description: 'Reembolso de compra', amount: '+$25.50', type: 'positive' },
    { date: '08/07/2024', description: 'Pago de factura', amount: '-$75.00', type: 'negative' }
  ];
}
