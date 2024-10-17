import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculo-cdb',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './calculo-cdb.component.html',
  styleUrls: ['./calculo-cdb.component.css']
})
export class CalculoCdbComponent {
  aporteMensal: number = 0;
  dataResgate: string = '';
  valorFinal: number | null = null;
  taxaMensal: number = 0.009;  // Taxa mensal fixa para o cálculo

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/tela-inicial']);
  }

  calcularRendimento() {
    const hoje = new Date();
    const resgate = new Date(this.dataResgate);
    const meses = (resgate.getFullYear() - hoje.getFullYear()) * 12 + (resgate.getMonth() - hoje.getMonth());

    if (meses > 0) {
      let montante = 0;
      for (let i = 0; i < meses; i++) {
        montante = (montante + this.aporteMensal) * (1 + this.taxaMensal);
      }
      this.valorFinal = montante;
    } else {
      this.valorFinal = 0;
    }
  }
}
