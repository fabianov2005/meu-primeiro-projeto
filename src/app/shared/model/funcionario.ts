import {Pessoa} from './pessoa';
class Funcionario extends Pessoa {
  departamento: any;

  constructor(nome, departamento) {
    super(nome);

    this.departamento = departamento;
  }

  getDepartamento() {

    return this.departamento;

  }

}
