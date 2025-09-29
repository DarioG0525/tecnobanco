import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login';
import { HomeComponent } from '../app/pages/home/home';
import { DashboardComponent } from '../app/pages/dashboard/dashboard';
import { TransactionsComponent } from '../app/pages//dashboard/transactions/transactions';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '**', redirectTo: 'login' } // fallback
];
