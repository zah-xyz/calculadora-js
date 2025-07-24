let operacion = '';

function agregar(valor) {
  if (operacion === '0' || operacion === 'Sintax Error') {
    operacion = valor;
  } else {
    operacion += valor;
  }
  return operacion;
}

function borrar_todo() {
  operacion = '';
  return '0';
}

function retroceder() {
  operacion = operacion.slice(0, -1);
  return operacion || '0';
}

function calcular() {
  try {
    let resultado = eval(operacion.replace(/%/g, '/100'));
    operacion = resultado.toString();
    return operacion;
  } catch {
    operacion = '';
    return 'Sintax Error';
  }
}

module.exports = { agregar, borrar_todo, retroceder, calcular };
