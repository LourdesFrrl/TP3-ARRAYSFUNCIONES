/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let apariciones = [];
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;

  if (apariciones[suma]) {
    apariciones[suma]++;
  } else {
    apariciones[suma] = 1;
  }
}

document.writeln("<h2>Resultados del lanzamiento de dos dados (50 veces)</h2>");
document.writeln("<table border='1' cellpadding='5'>");
document.writeln("<tr><th>Suma 🎲</th><th>Apariciones</th></tr>");

for (let suma = 2; suma <= 12; suma++) {
  document.writeln(`<tr><td>${suma}</td><td>${apariciones[suma] || 0}</td></tr>`);
}

document.writeln("</table>");
