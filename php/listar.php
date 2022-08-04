<?php

//Incluir a conexão
include("conexao.php");

//SQL
$sql = "SELECT * FROM cursos";

//Executar
$executar = mysqli_query($conexao, $sql);

//Array
$cursos = [];

//Índice
$indice = 0;

//Loop
while($linha = mysqli_fetch_assoc($executar)){
  $cursos[$indice]['idCursos'] = $linha['idCursos'];
  $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
  $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

  $indice++;
}

//JSON
json_encode(['cursos'=>$cursos]);


?>