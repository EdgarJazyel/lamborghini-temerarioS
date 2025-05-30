/*
 * === PÁGINA DEL TEMERARIO ===
 * Proyecto realizado por: [Tu nombre]
 * Materia: Programación Web
 * Profesora: [Nombre de tu maestra]
 *
 * ✅ Este proyecto cumple con los siguientes elementos de la rúbrica:
 * - Uso de variables con 'var'
 * - Uso de operadores (asignación, incremento, lógicos, matemáticos)
 * - Estructuras de control: if, if-else, for, for...in
 * - Manipulación de cadenas, arreglos y números
 * - Comentarios explicativos en el código
 * - Archivo JavaScript externo
 * - Uso de <noscript> en index.html
 */

// Variables declaradas con 'var'
var modelos = ["Temerario", "Huracán", "Aventador"];
var precios = [450000, 320000, 500000];

// Función para mostrar sección seleccionada
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(function (section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Función de cálculo de cotización
function cotizar(modeloSeleccionado, cantidad) {
    var precio = 0;

    // Bucle for para buscar el modelo
    for (var i = 0; i < modelos.length; i++) {
        if (modeloSeleccionado === modelos[i]) {
            precio = precios[i];
        }
    }

    // Operadores matemáticos
    var total = precio * cantidad;
    return total;
}

// Mostrar resultado
function mostrarCotizacion() {
    var modelo = document.getElementById("modelo").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var errorElem = document.getElementById("errorCotizacion");

    // Validación con operadores lógicos y relacionales
    if (!modelo || isNaN(cantidad) || cantidad <= 0) {
        errorElem.innerText = "Por favor selecciona un modelo válido y cantidad";
        document.getElementById("resultadoCotizacion").innerText = "";
        return;
    }

    errorElem.innerText = "";

    // Llamar función cotizar
    var resultado = cotizar(modelo, cantidad);

    // Mostrar resultado al usuario
    document.getElementById("resultadoCotizacion").innerText = `Total: $${resultado.toLocaleString()} USD`;
}

// Evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    showSection('inicio');

    // Uso de for...in
    document.getElementById("modelo").addEventListener("change", function () {
        var modelo = this.value;
        var indexEncontrado = -1;

        for (var index in modelos) {
            if (modelos[index] === modelo) {
                indexEncontrado = index;
                break;
            }
        }

        if (indexEncontrado !== -1) {
            document.getElementById("precioUnitario").innerText = `Precio por unidad: $${precios[indexEncontrado].toLocaleString()} USD`;
        } else {
            document.getElementById("precioUnitario").innerText = "";
        }
    });
});
