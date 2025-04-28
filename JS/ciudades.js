/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

let ciudades = [];
let ciudad;
do {
  ciudad = prompt("Ingrese el nombre de una ciudad (o cancelar para terminar):");
    ciudades.push(ciudad);
} while(confirm("¿Desea ingresar otra ciudad?"));
ciudades.push("París");

document.writeln(ciudades);

document.writeln("<p>La cantidad de ciudades ingresadas es: " + ciudades.length + "</p>");

document.writeln("<ul>");
document.writeln("<li>Primera ciudad: " + ciudades[0] + "</li>");
document.writeln("<li>Tercera ciudad: " + ciudades[2] + "</li>");
document.writeln("<li>Última ciudad: " + ciudades[ciudades.length - 1] + "</li>");
document.writeln("</ul>");

document.writeln("<p>Ciudad en segunda posición: " + ciudades[1] + "</p>");


ciudades[1] = "Barcelona"

document.writeln("<p>Ciudad en segunda posición por reemplazo: " + ciudades[1] + "</p>");

document.writeln("<h1>ARREGLO DE CIUDADES</h1>")
document.writeln("<ol>")
for(let i=0; i<ciudades.length; i++){
    document.writeln(`<li>${ciudades[i]}</li>`)
}
document.writeln("</ol>")

