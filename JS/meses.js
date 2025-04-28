let meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  document.writeln("<h1>Lista de Meses</h1>");
  document.writeln("<ul>");
    for(let i = 0; i < meses.length; i++) {
    document.writeln("<li>" + meses[i] + "</li>");
  }
  document.writeln("</ul>");
  