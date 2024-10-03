import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CorrentistaService } from '../correntista.service';
import { FormsModule } from '@angular/forms';
import { Correntista } from '../model/correntista';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class CadastroComponent {
  public dadosCadastrais = new Correntista();

  constructor(private service: CorrentistaService) {}

  clickSalvar(): void {
    this.service.cadastrar(this.dadosCadastrais).subscribe(resposta => {
      alert("Cadastrado com sucesso!");
    });
  }
}
