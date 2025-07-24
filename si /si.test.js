const calc = require("./si");



describe("Test de la calculadora", () => {
  beforeEach(() => {
    calc.borrar_todo(); 
  });

  test("agregar 2 y 3 muestra 23", () => {
    calc.agregar("2");
    calc.agregar("3");
    expect(calc.getPantalla()).toBe("23");
  });

  test("suma 2 + 3 → 5", () => {
    calc.agregar("2");
    calc.operacion("+");
    calc.agregar("3");
    calc.calcular();
    expect(calc.getPantalla()).toBe("5");
  });

  test("borrar todo deja 0", () => {
    calc.agregar("9");
    calc.borrar_todo();
    expect(calc.getPantalla()).toBe("0");
  });

  test("retroceder borra último dígito", () => {
    calc.agregar("8");
    calc.agregar("9");
    calc.retroceder();
    expect(calc.getPantalla()).toBe("8");
  });

  test("expresión mal escrita pone Sintax Error", () => {
    calc.setExpresion("5+*");
    calc.calcular();
    expect(calc.getPantalla()).toBe("Sintax Error");
  });
});
