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

function calcularModa(array) {
  const listaCount = {};

  //   for (let i = 0; i < array.length; i++) {
  //     if (listaCount[array[i]]) {
  //       listaCount[array[i]] += 1;
  //     } else {
  //       listaCount[array[i]] = 1;
  //     }
  //   }

  // vamos a chupetear el codigo de arriba

  array.forEach((elemento) =>
    !listaCount[elemento]
      ? (listaCount[elemento] = 1)
      : (listaCount[elemento] += 1)
  );
  console.log(listaCount);

  const listaArray = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);
  const listaOrdenadaMaxNumber = listaArray[listaArray.length - 1];

  const moda = `La moda es: ${listaOrdenadaMaxNumber[0]}, y aparecio ${listaOrdenadaMaxNumber[1]} veces`;
  return moda;
}

function arrayIsOdd(array) {
  if (array.length % 2) {
    return false;
  }
  return true;
}

function calcularMediana(array) {
  // deberia ordenar el orden de la lista
  const listaOrdenada = array.sort((a, b) => a - b);
  // ahora ordenada puedo seguir con la operacion
  const listaEsPar = arrayIsOdd(array);
  if (listaEsPar) {
    const indexPar1 = listaOrdenada.length / 2 - 1;
    const indexPar2 = listaOrdenada.length / 2;
    const listaMitades = [];
    listaMitades.push(listaOrdenada[indexPar1]);
    listaMitades.push(listaOrdenada[indexPar2]);

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(array.length / 2);
    const medianaListaImpar = listaOrdenada[indexMitadListaImpar];
    return medianaListaImpar;
  }
}

// SORT METHOD
// if (a > b) {
//     // en este caso el orden es ascendente
//   return 1;
// } else if (a == b) {
//     // en este caso el orden es igual
//   return 0;
// } else if (a < b) {
//     // en este caso el orden es descendente
//   return -1;
// }
