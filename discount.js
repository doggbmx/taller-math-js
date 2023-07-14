const inputPrice = document.getElementById("InputPrice");
// const coupon = document.getElementById("coupon");
const resultP = document.getElementById("ResultP");

const selectCupones = document.getElementById("selectCoupons");
const discounts = {
  diaDeLaIndependencia: 15,
  blackFriday: 30,
  diaDeLaMadre: 25,
  diaDelPadre: 20,
  navidad: 10,
};

for (cupon in discounts) {
  const option = document.createElement("option");
  option.value = discounts[cupon];
  option.textContent = cupon;
  selectCupones.appendChild(option);
}
function getDiscountPercentage() {
  const couponValue = coupon.value;
  const discountPercentage = discounts[couponValue];
  return discountPercentage;
}

function calcularDescuento(precio, descuento) {
  if (descuento >= 100) {
    alert("El descuento no puede ser mayor o igual a 100%");
    return;
  }
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const priceValue = Number(inputPrice.value);
  const discountValue = selectCupones.value;

  if (!priceValue || !discountValue) {
    alert("Por favor ingrese los valores");
    return;
  }

  const precioConDescuento = calcularDescuento(priceValue, discountValue);

  if (!precioConDescuento) {
    return;
  }

  resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;
}

document.getElementById("buttonCalcular").addEventListener("click", (event) => {
  event.preventDefault();
  onClickButtonPriceDiscount();
});

// SMALL COMMENTS ON CLASS
// Array.prototype.find() devuelve un elemento del array que cumpla con la condición dada.
// Array.prototype.filter() devuelve un array con los elementos que cumplan con la condición dada.
