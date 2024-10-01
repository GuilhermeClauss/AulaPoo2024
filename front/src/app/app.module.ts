import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutocadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importa FormsModule para usar ngModel
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para o login
      { path: 'login', component: LoginComponent },
      { path: 'autocadastro', component: AutocadastroComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
