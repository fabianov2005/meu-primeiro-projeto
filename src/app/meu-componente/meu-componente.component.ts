import { Pessoa } from './../shared/model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  pessoa = new Pessoa('Fabiano');

  constructor() {
    console.log(this.pessoa.MeuNome);
    this.pessoa.MeuNome = 'Fabiano Augusto';
    console.log(this.pessoa.MeuNome);
    this.pessoa.MeuNome = 'Fabiano Augusto Vasconcelos';
    console.log(this.pessoa.MeuNome);
    this.pessoa.MeuNome = 'Fabiano Augusto Vasconcelos Silva';
    console.log(this.pessoa.MeuNome);
    this.pessoa.setNome('Nome: Fabiano Augusto Vasconcelos Silva');
    console.log(this.pessoa.getNome());

  }

  ngOnInit() {
  }

}
