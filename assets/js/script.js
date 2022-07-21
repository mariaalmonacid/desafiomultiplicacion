/*1. Crear una función para solicitar el número y validar antes de mostrar el resultado que
el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
rango, mostrar un mensaje al usuario: "número fuera del rango"
2. Utilizar las características propias de ES6 como let y arrow function para desarrollar
el ejercicio.
3. Generar y mostrar por consola el resultado de las operaciones.
4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado.*/


//ciclo anidado,se utiliza las caracteristicas de ES6 let y arrow
let factorial_numero=0
while (factorial_numero <= 20) {
    console.log(factorial_numero);
    factorial_numero++;
}
for (let i = 1; i <= 2; i++) {
    let res = 1;
    for (let j = 1; j <= i; j++) {
        res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
  
    let factorial_numero = (x) => {
        
        if (x > 1) {

            return x * factorial_numero(x - 1); // fórmula para el factorial: X * (X-1)!
        } else {
            return x;
        }
    }
    var x = prompt("Ingrese un número que se encuentre entre 1 y 20");

    

    document.write(`El factorial de ${x}! es: ${factorial_numero(x)}`);

    /*tengo la dificultad de entregar el criterio: En caso de que no corresponda al
rango, mostrar un mensaje al usuario: "número fuera del rango"¿Cómo lo puedo solucionar?*/
    alert ("factorial_numero <20; número fuera del rango");
}




