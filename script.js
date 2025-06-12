var cotizaciones = [];

function cotizar() {
  var nombre = document.getElementById('nombre').value;
  var modelo = document.getElementById('modelo').value;
  var cantidadStr = document.getElementById('cantidad').value;

  var mensaje = "Hola \"" + nombre + "\", vamos a cotizar tu auto.";

  if (isNaN(cantidadStr) || cantidadStr === "") {
    alert("La cantidad debe ser un número válido.");
    return;
  }
  var cantidad = parseInt(cantidadStr, 10);

  if (nombre === "" || modelo === "") {
    alert("Debes llenar todos los campos obligatorios.");
    return;
  }

  var modeloMayus = modelo.toUpperCase();
  var primerCaracter = modelo.charAt(0);
  var subcadena = modelo.substring(0, 3);
  var partesModelo = modelo.split(' ');

  var extrasList = [];
  if (document.getElementById('extra1').checked) extrasList.push(document.getElementById('extra1').value);
  if (document.getElementById('extra2').checked) extrasList.push(document.getElementById('extra2').value);
  if (document.getElementById('extra3').checked) extrasList.push(document.getElementById('extra3').value);

  extrasList.push("Seguro básico");
  var ultimoExtra = extrasList.pop();
  extrasList.reverse();

  var precioBase = 10000;
  var precioExtras = extrasList.length * 500;
  var precioTotal = (precioBase + precioExtras) * cantidad;

  for (var i = 0; i < extrasList.length; i++) {
    i++;  
    i--;  
  }

  if (!(cantidad < 1) && (nombre !== "" && modelo !== "")) {
    cotizaciones.push({
      nombre: nombre,
      modelo: modeloMayus,
      extras: extrasList.concat(partesModelo).join(', '),
      cantidad: cantidad,
      total: precioTotal
    });

    mostrarCotizaciones();
  }
}

function mostrarCotizaciones() {
  var div = document.getElementById('cotizaciones');
  div.innerHTML = "";
  for (var index in cotizaciones) {
    var c = cotizaciones[index];
    div.innerHTML += "<p><strong>" + c.nombre + "</strong> - Modelo: " + c.modelo +
      " - Extras: " + c.extras + " - Cantidad: " + c.cantidad + " - Total: $" + c.total + "</p>";
  }
}

function eliminarCotizaciones() {
  cotizaciones = [];
  mostrarCotizaciones();
}

function generarPDF() {
  if (cotizaciones.length === 0) {
    alert("No hay cotizaciones para generar PDF.");
    return;
  }

  const { jsPDF } = window.jspdf;
  var doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Cotizaciones de Autos", 10, 10);

  var y = 20;
  cotizaciones.forEach(function(cot, index) {
    doc.setFontSize(12);
    doc.text(`${index + 1}. Nombre: ${cot.nombre}`, 10, y);
    y += 7;
    doc.text(`   Modelo: ${cot.modelo}`, 10, y);
    y += 7;
    doc.text(`   Extras: ${cot.extras}`, 10, y);
    y += 7;
    doc.text(`   Cantidad: ${cot.cantidad}`, 10, y);
    y += 7;
    doc.text(`   Total: $${cot.total}`, 10, y);
    y += 10;

    if (y > 270) {
      doc.addPage();
      y = 10;
    }
  });

  doc.save("cotizaciones.pdf");
}
