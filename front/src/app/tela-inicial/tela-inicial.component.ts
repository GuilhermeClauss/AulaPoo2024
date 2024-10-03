import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})

export class TelaInicialComponent {
  constructor(private router: Router) {

  }
  public fazerumpix() {
    this.router.navigate(['/tela-pix']);
    }
}
