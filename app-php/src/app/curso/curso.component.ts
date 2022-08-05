import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  //Construtor
  constructor() { }

  //Inicializador
  ngOnInit(): void {

  }
  //Cadastro
  cadastrar(): void {
    alert("Cadastro");
  }

  //listar
  listar(): void {
    alert("Listar");
  }

  //Alterar
  editar(): void {
    alert("Editar")
  }

  //Remover
  excluir(): void {
    alert("Remover")
  }

}
