import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base
  url = "http://localhost/api/project-api/php/";

  //Vetor de Cursos
  vetor: Curso[] = [];

  //Construtor
  constructor(private curso_servico: CursoService) { }

  //Inicializador
  ngOnInit() {
    //Listar cursos ao iniciar.
    this.listar();
  }
  //Cadastrar
  cadastrar(): void {
    alert("Cadastrar");
  }

  //listar
  listar() {
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  //Editar
  editar(): void {
    alert("Editar")
  }

  //Remover
  excluir(): void {
    alert("Remover")
  }

}
