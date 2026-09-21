function isListaVazia(lista) {
  var iterador = lista[Symbol.iterator]();
  var resultado = iterador.next();
  return resultado.done;
}

console.log(isListaVazia([]));        // true
console.log(isListaVazia([1, 2, 3])); // false