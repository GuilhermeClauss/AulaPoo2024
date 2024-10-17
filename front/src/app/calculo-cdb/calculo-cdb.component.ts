import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdbService } from '../cdb.service';

@Component({
  selector: 'app-calculo-cdb',
  standalone: true,
  imports: [CommonModule, DecimalPipe, ReactiveFormsModule],
  templateUrl: './calculo-cdb.component.html',
  styleUrls: ['./calculo-cdb.component.css']
})
export class CalculoCdbComponent {
  cdbForm: FormGroup;
  resultadoRendimento: number | null = null;

  constructor(private fb: FormBuilder, private cdbService: CdbService) {
    this.cdbForm = this.fb.group({
      aporteMensal: ['', [Validators.required, Validators.min(1)]],
      dataResgate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cdbForm.valid) {
      const aporteMensal = this.cdbForm.value.aporteMensal;
      const dataResgate = new Date(this.cdbForm.value.dataResgate);

      const meses = this.cdbService.calcularMeses(dataResgate);
      this.resultadoRendimento = this.cdbService.calcularRendimento(aporteMensal, meses);
    }
  }
}
