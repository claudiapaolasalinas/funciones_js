/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
 * 
*/
"use strict";

let number1 = 0;
let number2 = 0;
let number3 = 0;
let number4 = 0;
let number5 = 0;

function promedio() {
    number1 = parseFloat(prompt("Ingrese el primer número: "));
    number2 = parseFloat(prompt("Ingrese el segundo número: "));
    number3 = parseFloat(prompt("Ingrese el tercer número: "));
    number4 = parseFloat(prompt("Ingrese el cuarto número: "));
    number5 = parseFloat(prompt("Ingrese el quinto número: "));

    alert(`El promedio de los números ${number1}, ${number2}, ${number3}, ${number4}, ${number5} es: ${(number1 + number2 + number3 + number4 + number5) / 5}`);
    console.log(`El promedio de los números ${number1}, ${number2}, ${number3}, ${number4}, ${number5} es: ${(number1 + number2 + number3 + number4 + number5) / 5}`);
}

promedio()