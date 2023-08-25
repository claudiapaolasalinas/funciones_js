"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones
    // En esta función debe determinar el promedio
    // de los dos números ingresados por parámetro 
    // Deberá calcular el promedio
    // y luego imprimir dicho valor en consola
    // resultado = ((numero1 + numero2) / 2)

function promedio(numero1, numero2) {
    console.log("Funcion promedio");
    let resultado = ((numero1 + numero2) / 2);
    console.log(`El promedio de los números ${numero1} y ${numero2} es: ${resultado}`);
}

promedio(10, 5);