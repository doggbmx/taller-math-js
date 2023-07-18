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
