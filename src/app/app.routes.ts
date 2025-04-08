import { Routes } from '@angular/router';
import { LoginComponent } from './mis_componentes/login/login.component';
import { BienvenidoComponent } from './mis_componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './mis_componentes/error/error.component';

export const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent } // Ruta comodín para errores
];
