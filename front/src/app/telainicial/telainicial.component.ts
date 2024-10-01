import { Component, OnInit } from '@angular/core';
import { Transacao } from '../../model/transacao';
import { CommonModule } from '@angular/common';
import { TransacaoService } from '../transacao.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent implements OnInit {
  
  extrato: Transacao[] = [];
  texto: string = "EXTRATO DO CLIENTE"

  constructor(
    private service: TransacaoService
  ) { }

  ngOnInit(): void {

    this.service.buscarExtrato()
      .subscribe(itens => {
        this.extrato = itens;
      })
  }
}