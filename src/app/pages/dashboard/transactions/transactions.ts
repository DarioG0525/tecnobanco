import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../../components/navbar/navbar';


interface Cuenta {
  id: number;
  nombre: string;
  saldo: number;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NavbarComponent],
  templateUrl: './transactions.html',
  styleUrls: ['./transactions.css']
})
export class TransactionsComponent {
  transactionForm: FormGroup;
  cuentasOrigen: Cuenta[] = [
    { id: 1, nombre: 'Cuenta Ahorros', saldo: 1200 },
    { id: 2, nombre: 'Cuenta Corriente', saldo: 800 }
  ];

  showError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      cuentaOrigen: [null, Validators.required],
      cuentaDestino: ['', Validators.required],
      monto: [0, [Validators.required, Validators.min(1)]],
      descripcion: ['']
    });
  }

  confirmarTransferencia(): void {
    const { cuentaOrigen, monto } = this.transactionForm.value;

    if (cuentaOrigen && monto > cuentaOrigen.saldo) {
      this.showError = true;
      return;
    }

    this.showError = false;
    console.log('Transferencia exitosa:', this.transactionForm.value);

    // Reset después de confirmar
    this.transactionForm.reset();
  }
}
