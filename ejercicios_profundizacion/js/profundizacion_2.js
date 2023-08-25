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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
"use strict";

let cantInvitados = parseInt(prompt("Indique la cantidad de invitados que desee agregar a la lista: 1, 2 o 3: "));

function generarInvitados() {
    if(cantInvitados === 1) {
      const invitado1 = String(prompt("Ingrese el nombre del invitado:"));
      console.log(`El nombre del invitado agregado a la lista es: ${invitado1}`);
    } else if(cantInvitados === 2) {
      const invitado1 = String(prompt("Ingrese el nombre del primer invitado:"));
      const invitado2 = String(prompt("Ingrese el nombre del segundo invitado:"));
      console.log(`Los nombres de los invitados que fueron agregados a la lista son: ${invitado1} y ${invitado2}`);
    } else if(cantInvitados === 3) {
      const invitado1 = String(prompt("Ingrese el nombre del primer invitado:"));
      const invitado2 = String(prompt("Ingrese el nombre del segundo invitado:"));
      const invitado3 = String(prompt("Ingrese el nombre del tercer invitado:"));
      console.log(`Los nombres de los invitados que fueron agregados a la lista son: ${invitado1}, ${invitado2} y ${invitado3}`);
    } else {
        alert("El número ingresado es incorrecto. Por favor, vuelva a intentarlo. Recuerde que sólo debe ingresar una de las siguientes opciones: 1, 2 o 3.");
        console.log("El número ingresado es incorrecto. Por favor, vuelva a intentarlo. Recuerde que sólo debe ingresar una de las siguientes opciones: 1, 2 o 3.");
    }
  }
  
  generarInvitados();
  