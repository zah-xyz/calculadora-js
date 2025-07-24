const { agregar, borrar_todo, retroceder, calcular } = require('./si');

beforeEach(() => {
  borrar_todo();
});

test('agrega números a la expresión', () => {
  expect(agregar("1")).toBe("1");
  expect(agregar("2")).toBe("12");
});

test('realiza suma', () => {
  agregar("2");
  agregar("+");
  agregar("3");
  expect(calcular()).toBe("5");
});

test('multiplicación simple', () => {
  agregar("4");
  agregar("*");
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

test("operacion con porcentaje", () => {
  agregar("50");
  agregar("%");
  expect(calcular()).toBe("0.5");
});

test("descuento con porcentaje", () => {
  agregar("200");
  agregar("-");
  agregar("20%");
  expect(calcular()).toBe("160");
});