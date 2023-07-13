console.group("Cuadrados");
const lado = 5;
const perimetroCuadrado = lado * 4;

const areaCuardrado = lado * lado;

console.log({
  lado,
  perimetroCuadrado,
  areaCuardrado,
});
console.groupEnd("Cuadrados");

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  perimetroTriangulo,
  areaTriangulo,
});
console.groupEnd("Triangulos");
