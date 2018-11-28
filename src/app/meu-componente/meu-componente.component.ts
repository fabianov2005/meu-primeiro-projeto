import { Pessoa } from './../shared/model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  pessoa = new Pessoa('Fabiano');
      // tslint:disable-next-line:prefer-const
  cores = ['azul', 'amarelo', 'verde'];

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
    this.exibeCores();

    this.soma();

    this.convertFahrenheitCelsius();

  }

  ngOnInit() {
  }

  convertFahrenheitCelsius() {

    const tempCelsius = [20, 30, 50, 80, 120, -50 ];

    console.log('Retornando com MAP');
    console.log((tempCelsius.map(element => ((element - 32) * (5 / 9)))));
    console.log('Retornando com Filter');

    console.log((tempCelsius.map(element => ((element - 32) * (5 / 9))).filter(t => t > 0)));

    console.log('Retornando com forEach');
    tempCelsius.forEach(element => (console.log((element - 32) * (5 / 9))));

    console.log('Retornando com Filter forEach');

    // console.log((
    //   tempCelsius.forEach(
    //         element => (element - 32) * (5 / 9))
    //   ).filter(t => t > 0)
    // );

  }

  // somaReduce() {
  //   // tslint:disable-next-line:prefer-const
  //   let rockets = [
  //     { country: 'Russia', launches: 32 },
  //     { country: 'US', launches: 23 },
  //     { country: 'China', launches: 16 },
  //     { country: 'Europe(ESA)', launches: 7 },
  //     { country: 'India', launches: 4 },
  //     { country: 'Japan', launches: 3 }
  // ];

  // let sum = rockets.reduce( function( prevVal, elem ) {
  //     return prevVal + elem.launches;
  // }, 0 );

  // ES6
  // rockets.reduce( ( prevVal, elem ) => prevVal + elem.launches, 0 );

  // sum // 85
  // }

  soma() {
    // tslint:disable-next-line:no-unused-expression
    let resultado: any;

    resultado = soma2 => 1 + 2;
    console.log(resultado);
  }

  exibeCores() {
    // iterator forEach
    this.cores.forEach(
      function (cor) {
        console.log(cor);
      }
    );

    // iterator for-of
    for (let cor of this.cores) {
      console.log(cor);
      }
      // iterator for
      for (let i = 0; i < this.cores.length; i++) {
      console.log(this.cores[i]);
      }
  }

  arrow() {

  }

}
