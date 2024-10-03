import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './autocadastro/autocadastro.component';
import { TelaPixComponent } from './tela-pix/tela-pix.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'tela-pix', component: TelaPixComponent }
];
