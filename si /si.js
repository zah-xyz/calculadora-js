'use strict';
let expresion = "";

function agregar(valor) {
  expresion += valor;
}

function borrar_todo() {
  expresion = "";
}

function retroceder() {
  expresion = expresion.slice(0, -1);
}

function operacion(operador) {
  expresion += operador;
}

function calcular() {
   try {
    let resultado = eval(operacion.replace('%', '/100'));
    pantalla.textContent = resultado;
    operacion = resultado.toString();
  } catch {
    pantalla.textContent = 'Sintax Error';
    operacion = '';
  }
}
module.exports = {
  agregar,
  borrar_todo,
  retroceder,
  operacion,
  calcular,
};
