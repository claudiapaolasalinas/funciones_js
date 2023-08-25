"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada

function generarInvitados() {

    let invitado1 = String(prompt("Ingrese el nombre del primer invitado:"));
    let invitado2 = String(prompt("Ingrese el nombre del segundo invitado:"));
    let invitado3 = String(prompt("Ingrese el nombre del tercer invitado:"));

    console.log(`El nombre del primer invitado es: ${invitado1}`);
    console.log(`El nombre del segundo invitado es: ${invitado2}`);
    console.log(`El nombre del tercer invitado es: ${invitado3}`);
}

generarInvitados()