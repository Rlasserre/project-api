import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {


  //Construtor
  constructor(private http: HttpClient) { }

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
