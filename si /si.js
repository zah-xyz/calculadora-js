
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
   if (expresion.trim() === "") {
    expresion = "0"; 
    return;
  }
  try {
    const resultado = eval(expresion);
    expresion = resultado.toString();

  } catch {
    expresion = "Sintax Error";
  }
}

function getPantalla() {
  return expresion === "" ? "0" : expresion;
}

function setExpresion(exp) {
  expresion = exp;
}

module.exports = {
  agregar,
  borrar_todo,
  retroceder,
  operacion,
  calcular,
  getPantalla,
  setExpresion,
};
