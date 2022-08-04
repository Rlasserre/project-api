<?php

//Incluir a conexão
include("conexao.php");

//Obter dados
$obterDados = file_get_contents("php://input");

//Extrair os dados do JSON
$extrair= json_decode($obterDados);

//Separar os dados do JSON
$idCursos = $extrair->cursos->idCursos;


//SQL
$sql = "DELETE FROM cursos WHERE idCursos=$idCursos";
mysqli_query($conexao, $sql);

?>