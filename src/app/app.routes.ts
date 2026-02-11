import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Gatos } from './adopcion/gatos/gatos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'gatos', component: Gatos },
];
