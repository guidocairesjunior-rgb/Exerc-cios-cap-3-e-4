var alunos = [
  { nome: 'Diogo', media: 5.5 },
  { nome: 'Julia', media: 9.5 },
  { nome: 'Roberto', media: 1.5 },
  { nome: 'Tiago', media: 6.0 }
];

function aprovados(alunos, mediaMinima) {
  return alunos.filter(function(aluno) {
    return aluno.media >= mediaMinima;
  });
}

console.log(aprovados(alunos, 6.5));