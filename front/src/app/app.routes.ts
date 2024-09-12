import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelainicialComponent } from './telainicial/telainicial.component';

export const routes: Routes = [
    {path:  '', component: LoginComponent}
    {path: 'telainicial', component: TelainicialComponent}
];
