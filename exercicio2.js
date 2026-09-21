function dobrar(numeros) {
  return numeros.map(function(numero) {
    return numero * 2;
  });
}

console.log(dobrar([1, 2, 3])); // [2, 4, 6]