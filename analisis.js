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
