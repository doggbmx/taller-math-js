function calcularPromedio(array) {
  // sumar todos los elementos del array y dividir por la cantidad de elementos
  //   let sumaElementos;
  //   for (let i = 0; i < array.length; i++) {
  //     sumaElementos += array[i];
  //   }

  // ahora intentaremos hacerlo con metodos de array
  let sumaElementos;
  // .reduce() reduce todos los elementos de una lista a un solo elemento
  sumaElementos = array.reduce((valorAcumulado, nuevoValor) => {
    return valorAcumulado + nuevoValor;
  });

  return sumaElementos / array.length;
}

function arrayIsOdd(array) {
  if (array.length % 2) {
    return true;
  }
  return false;
}

function calcularMediana(array) {
  // deberia ordenar el orden de la lista
  array.sort((a, b) => a - b);
  // ahora ordenada puedo seguir con la operacion
  const listaEsPar = arrayIsOdd(array);
  if (listaEsPar) {
    const indexPar1 = array.length / 2;
    const indexPar2 = array.length / 2 - 1;

    const listaMitades = [array[indexPar1], array[indexPar2]];
    calcularPromedio(listaMitades);
  } else {
    const numeroImpar = Math.floor(array.length / 2) + 1;
    return array[numeroImpar - 1];
  }
}
