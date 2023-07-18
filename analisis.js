// analisis para juanita

function encontrarPersona(personaABuscar) {
  return salarios.find((obj) => obj.name == personaABuscar);
}

function medianaPorPersona(nombrePersona) {
  const trabajosDePersona = encontrarPersona(nombrePersona).trabajos;

  const salariosDeTrabajos = trabajosDePersona.map((trabajo) => {
    return trabajo.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salariosDeTrabajos);

  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajosDePersona = encontrarPersona(nombrePersona).trabajos;

  let porcentajesDeCrecimiento = [];

  for (let i = 1; i < trabajosDePersona.length; i++) {
    const salarioActual = trabajosDePersona[i].salario;
    const salarioAnterior = trabajosDePersona[i - 1].salario;

    const crecimiento = salarioActual - salarioAnterior;
    const porcentajeCrecimiento = crecimiento / salarioAnterior;
    console.log(porcentajeCrecimiento);
    porcentajesDeCrecimiento.push(porcentajeCrecimiento);
  }
  console.log(`crecimiento => ${porcentajesDeCrecimiento}`);

  const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
    porcentajesDeCrecimiento
  );

  const ultimoSalario = trabajosDePersona[trabajosDePersona.length - 1].salario;

  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;
  return nuevoSalario;
}

let empresas = {};

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}
// console.log(empresas);
// vamos a chupetear el codigo de arriba

// empresas = salarios.map((persona) => {
//   persona.trabajos.forEach((item) => {
//     if (!empresas[item.empresa]) {
//       empresas[item.empresa] = {};
//     }
//     if (!empresas[item.empresa][item.year]) {
//       empresas[item.empresa][item.year] = [];
//     }
//     empresas[item.empresa][item.year].push(item.salario);
//     console.log(`===> ${JSON.stringify(empresas)}`);
//   });
// });

function calcularMedianaPorEmpresa(empresa, year) {
  if (!empresas[empresa]) {
    console.warn("La empresa no existe");
    return;
  } else if (!empresas[empresa][year]) {
    console.warn("La empresa no dio salarios ese anho");
    return;
  } else {
    return PlatziMath.calcularMediana(empresas[empresa][year]);
  }
}

function proyeccionPorEmpresa(empresa) {
  if (!empresas[empresa]) {
    console.warn("La empresa no existe");
  } else {
    const years = Object.keys(empresas[empresa]);
    const listaMedianaYears = years.map((year) => {
      return calcularMedianaPorEmpresa(empresa, year);
    });

    let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioAnterior = listaMedianaYears[i - 1];

      const crecimiento = salarioActual - salarioAnterior;
      const porcentajeCrecimiento = crecimiento / salarioAnterior;
      porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
      porcentajesCrecimiento
    );

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajeCrecimiento;
    const nuevaMediana = ultimaMediana + aumento;
    return nuevaMediana;
  }
}

function medianaGeneral() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );

  const generalMediana = PlatziMath.calcularMediana(listaMedianas);

  return generalMediana;
}

function medianaTop10() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );

  const listaOrdenada = listaMedianas.sort((a, b) => a - b);

  const cantidad = listaMedianas.length / 10;
  const limite = listaOrdenada.length - cantidad;

  // el metodo slice COPIA los elementos de un array
  const listaTop10 = listaOrdenada.slice(limite, listaOrdenada.length);
  // el metodo splice REMUEVE los elementos de un array
  // const listaTop10 = listaOrdenada.slice(limite, cantidad);

  const medianaTop10 = PlatziMath.calcularMediana(listaTop10);
  return medianaTop10;
}
