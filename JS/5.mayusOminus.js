function analizarCadena(texto) {
    if (texto === texto.toUpperCase()) {
      return "La cadena está formada solo por MAYÚSCULAS.";
    } else if (texto === texto.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    } else {
      return "La cadena contiene una mezcla de MAYÚSCULAS y minúsculas.";
    }
  }
  
  let cadena = prompt("Ingresá una cadena de texto:");
  
  let resultado = analizarCadena(cadena);
  document.writeln("<p>" + resultado + "</p>");
  