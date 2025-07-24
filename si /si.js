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
    if (operacion.includes('%')) {
      let op = operacion.includes('-') ? '-' : operacion.includes('+') ? '+' : null;
      if (op) {
        let partes = operacion.split(op);
        let numero = parseFloat(partes[0]);
        let porcentaje = parseFloat(partes[1]);

        if (isNaN(numero) || isNaN(porcentaje)) throw 'Error';

        let resultado = (op === '-')
          ? numero - (numero * porcentaje / 100)
          : numero + (numero * porcentaje / 100);

        operacion = resultado.toString();
        return operacion;
      }
    }
    let resultado = eval(operacion);
    operacion = resultado.toString();
    return operacion;
  } catch {
    operacion = '';
    return 'Sintax Error';
  }
}

module.exports = { agregar, borrar_todo, retroceder, calcular };
