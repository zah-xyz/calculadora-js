const { agregar, borrar_todo, retroceder, operacion, calcular } = require('./calculadora');


test('agrega números a la expresión', () => {
    expect(agregar("1")).toBe("1");
    expect(agregar("2")).toBe("12");
});

test('realiza suma', () => {
    agregar("2");
    operacion("+");
    agregar("3");
    expect(calcular()).toBe("5");
});

test('multiplicación simple', () => {
    agregar("4");
    operacion("*");
    agregar("5");
    expect(calcular()).toBe("20");
});

test('borrar todo deja en 0', () => {
    agregar("99");
    expect(borrar_todo()).toBe("0");
});

test('error de sintaxis devuelve mensaje', () => {
    agregar("5+*3");
    expect(calcular()).toBe("Sintax Error");
});
