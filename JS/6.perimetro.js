function calcularPerimetro(a, b) {
    return 2 * (a + b);
  }
  
let ladoA = parseFloat(prompt("Ingresá el valor del lado A del rectángulo:"));
let ladoB = parseFloat(prompt("Ingresá el valor del lado B del rectángulo:"));
  
let perimetro = calcularPerimetro(ladoA, ladoB);
  
document.writeln(`<p>El perímetro del rectángulo es: ${perimetro}</p>`);
  