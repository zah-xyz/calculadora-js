let expresion = "";

function agregar(valor) {
    expresion += valor;
    return expresion;
}

function borrar_todo() {
    expresion = "";
    return "0";
}

function retroceder() {
    expresion = expresion.slice(0, -1);
    return expresion || "0";
}

function operacion(operador) {
    expresion += operador;
    return expresion;
}

function calcular() {
    try {
        const resultado = eval(expresion);
        expresion = resultado.toString();
        return expresion;
    } catch (error) {
        expresion = "";
        return "Sintax Error";
    }
}


module.exports = {
    agregar,
    borrar_todo,
    retroceder,
    operacion,
    calcular
};
