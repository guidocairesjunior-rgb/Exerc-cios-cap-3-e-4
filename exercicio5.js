var ruas = [
  { nome: 'Rua 1', tamanho: 2500 },
  { nome: 'Rua 2', tamanho: 3400 },
  { nome: 'Rua 3', tamanho: 1400 }
];

function calculaDistancia(ruas) {
  var total = 0;
  for (var rua of ruas) {
    total += rua.tamanho;
  }
  return total;
}

console.log(calculaDistancia(ruas)); // 7300