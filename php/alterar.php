<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");

//Extrair os dados do JSON
$extrair= json_decode($obterDados);

//Separar os dados do JSON
$idCursos = $extrair->cursos->idCursos;
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;

//SQL
$sql = "UPDATE cursos 
        SET nomeCurso='$nomeCurso', valorCurso=$valorCurso 
        WHERE idCursos=$idCursos";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrados
$curso = [
  'idCursos' => $idCursos,
  'nomeCurso' => $nomeCurso,
  'valorCurso' => $valorCurso
]

json_encode(['curso']=>$curso);

?>