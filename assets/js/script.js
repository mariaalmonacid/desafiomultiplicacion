/*1. Crear una función para solicitar el número y validar antes de mostrar el resultado que
el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
rango, mostrar un mensaje al usuario: "número fuera del rango"
2. Utilizar las características propias de ES6 como let y arrow function para desarrollar
el ejercicio.
3. Generar y mostrar por consola el resultado de las operaciones.
4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado.*/


//ciclo anidado,se utiliza las caracteristicas de ES6 let y arrow
let limpiar = () => {
    document.querySelector("#mensajes").innerHTML="";
}

let form = document.getElementById("formulario");

form.addEventListener("submit", function(e){
    //console.log(e.originalTarget[0].value)
    e.preventDefault();
    let numero1 = document.getElementById("numero1").value;

    calcular(numero1)
})


let calcular = (num) => {
    let contenedorTabla = document.getElementById("tablas");
    contenedorTabla.innerHTML ="";
    let contenedorFactorial = document.getElementById("factorial");
    contenedorFactorial.innerHTML = "";

    document.getElementById("factorial").innerHTML =""
    let tabla ="<h2>Resultado de las tablas:</h2>";
    let factorial = "<h2>Resultado del factorial:</h2>";
    if (num < 1 || num > 20) {
        let parrafo = document.querySelector("#mensajes");
        parrafo.innerText = "Número se sale del rango solicitado";
        return false; 
    } 
    limpiar();
    for (let i = 1; i <= num; i++) { 
        let prod = i * num;
        tabla +=`<p>${i} x ${num} = ${prod}</p>`; 
    } 
    for (let i = 1; i <= num; i++) { 
        let res = 1; 
        for (let j = 1; j <= i; j++) { 
            res = res * j; 
        } 
        factorial += `<p>Factorial de  ${i} es: ${res}</p>`; 
    }
    contenedorTabla.innerHTML = tabla;
    contenedorFactorial.innerHTML = factorial;
}