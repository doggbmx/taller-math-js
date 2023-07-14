function calcularPromedio(array) {
  // sumar todos los elementos del array y dividir por la cantidad de elementos
  let sumaElementos;
  for (let i = 0; i < array.length; i++) {
    sumaElementos += array[i];
  }
  return sumaElementos / array.length;
}
