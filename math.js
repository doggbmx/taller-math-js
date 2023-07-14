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

function calcularAlturaTriangulo(ladosEquivalentes, base) {
  if (ladosEquivalentes === base) {
    console.warn("Esto no es un triangulo isoseles!");
  } else {
    const altura = Math.sqrt(ladosEquivalentes ** 2 - base ** 2 / 4);
    return altura;
  }
}

function cualcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
  const perimetro = lado1 + lado2 + lado3;
  const altura =
    (2 / lado1) *
    Math.sqrt(
      perimetro *
        (perimetro - lado1) *
        (perimetro - lado2) *
        (perimetro - lado3)
    );
  return altura;
}

console.groupEnd("Triangulos");

console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = PI * (radioCirculo * radioCirculo);
const areaCirculo = PI * radioCirculo ** 2; // ** es para elevar a la potencia

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  perimetroCirculo,
  areaCirculo,
});

function calcularCirculo(radio) {
  //   const radioAlCuadrado = radio ** 2;
  const radioAlCuadrado = Math.pow(radio, 2); // usando math
  return {
    circunferencia: radio * 2 * PI,
    area: PI * radioAlCuadrado,
  };
}

console.groupEnd("Circulos");

function calcularDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularDescuento(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}

document.getElementById("buttonCalcular").addEventListener("click", (event) => {
  event.preventDefault();
  onClickButtonPriceDiscount();
});
