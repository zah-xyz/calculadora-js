let expresion = "";
const Pantalla = document.getElementById("Pantalla")

function agregar(valor){
    if(Pantalla.innerText=== "0") Pantalla.innerText = "";
    Pantalla.innerText += valor;
    expresion += valor;
}

function borrar_todo(){
    Pantalla.innerText = "0";
    expresion="";
}

function retroceder(){
    expresion = expresion.slice(0, -1);
    Pantalla.innerText = Pantalla.innerText.slice(0, -1);
    if(Pantalla.innerText === "0") Pantalla.innerText ="0";
}

function operacion (operador){
    Pantalla.innerText += operador;
    expresion += operador;
}

function calcular(){
    try {
        const resultado = eval(expresion);
        Pantalla.innerText = resultado;

    } catch (error) {
        Pantalla.innerText = "Sintax Error";
        expresion = "";

    }
   
}

