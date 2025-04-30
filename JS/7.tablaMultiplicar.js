function mostrarTabla(numero) {
    document.writeln(`<h2>Tabla del ${numero}</h2>`);
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      document.writeln(`<p>${numero} x ${i} = ${resultado}</p>`);
    }
  }
  
  let numeroIngresado = parseInt(prompt("Ingresá un número para ver su tabla de multiplicar:"));
  
  mostrarTabla(numeroIngresado);
  