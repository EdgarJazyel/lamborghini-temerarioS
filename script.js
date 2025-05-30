/*
 * === PÁGINA DEL TEMERARIO ===
 * Proyecto realizado por: [Tu nombre]
 * Materia: Programación Web
 * Profesora: [Nombre de tu maestra]
 *
 * ✅ Este proyecto cumple con los siguientes elementos de la rúbrica:
 * - Uso de variables con 'var'
 * - Uso de operadores (asignación, incremento, lógicos, matemáticos)
 * - Estructuras de control: if, for, for...in
 * - Manipulación de cadenas, arreglos y números
 * - Comentarios explicativos en el código
 * - Archivo JavaScript externo
 * - Uso de <noscript> en index.html
 * - Generación de PDF con jspdf
 * - Uso de localStorage para almacenamiento
 */

// Variables declaradas con 'var'
var sonido = document.getElementById("sonido-inicio");

// Función para reproducir sonido al cargar la página
function reproducirSonido() {
    if (sonido) sonido.play();
}

// Mostrar sección seleccionada
function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    document.getElementById(sectionId).classList.add('active');
}

// Eliminar historial de cotizaciones
function eliminarCotizaciones() {
    localStorage.removeItem("cotizaciones");
    actualizarHistorial();
}

// Generar PDF usando jsPDF
async function generarPDF() {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    var modelo = document.getElementById("modelo").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var precioUnitario = modelo.includes("Híbrido") ? 480000 : 400000;
    var subtotal = cantidad * precioUnitario;
    var impuestos = subtotal * 0.16;
    var total = subtotal + impuestos;

    // Añadir contenido al PDF
    doc.setFontSize(16);
    doc.text("Cotización Oficial Lamborghini", 20, 20);
    doc.setFontSize(12);
    doc.text(`Modelo: ${modelo}`, 20, 40);
    doc.text(`Cantidad: ${cantidad}`, 20, 50);
    doc.text(`Precio Unitario: $${precioUnitario.toLocaleString()}`, 20, 60);
    doc.text(`Subtotal: $${subtotal.toLocaleString()}`, 20, 70);
    doc.text(`Impuestos (16%): $${impuestos.toLocaleString()}`, 20, 80);
    doc.text(`Total: $${total.toLocaleString()}`, 20, 90);
    doc.text("Gracias por su preferencia. Esta cotización es válida por 15 días.", 20, 110);
    doc.text("[Firma Digital de Lamborghini]", 20, 120);

    // Guardar y mostrar PDF
    var url = URL.createObjectURL(new Blob([doc.output("arraybuffer")], { type: "application/pdf" }));
    document.getElementById("pdf-preview").innerHTML = `<iframe src="${url}"></iframe>`;
    doc.save(`cotizacion-${modelo}.pdf`);

    guardarCotizacion(`${modelo} x${cantidad} - Total: $${total.toLocaleString()} USD`);
}

// Guardar cotización en localStorage
function guardarCotizacion(texto) {
    var cotizaciones = JSON.parse(localStorage.getItem("cotizaciones")) || [];
    cotizaciones.push(texto);
    localStorage.setItem("cotizaciones", JSON.stringify(cotizaciones));
    actualizarHistorial();
}

// Actualizar historial de cotizaciones
function actualizarHistorial() {
    var contenedor = document.getElementById("historial");
    var cotizaciones = JSON.parse(localStorage.getItem("cotizaciones")) || [];

    contenedor.innerHTML = "<h3>Historial de Cotizaciones</h3>";

    for (var i in cotizaciones) {
        contenedor.innerHTML += `<div class='cotizacion-item'>${cotizaciones[i]}</div>`;
    }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarHistorial();
});
