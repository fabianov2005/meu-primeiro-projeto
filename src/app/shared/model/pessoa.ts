export class Pessoa {

  private nome: string;

  constructor(nome) {
    this.nome = nome;
  }

  /*
  ou
  constructor(private nome:string){
    this.nome = nome;
  }
  O construtor cria tanto o atributo nome como um parâmetro de entrada chamado nome.
  */

  get MeuNome() {
    return  this.nome;
  }

  set MeuNome(nome) {
    this.nome = nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

}
