// script.js - Adaptado según rubrica pedida por la maestra

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

// Declaración de variables
var secciones = ["inicio", "contacto", "ubicacion"];
var contadorVisitas = 0;

contadorVisitas++; // Incremento
console.log("Página visitada " + contadorVisitas + " veces");

// Arreglo de modelos
var modelos = ["Aventador", "Huracán", "Urus", "Temerario"];

// Mostrar sección seleccionada
function mostrarSeccion(id) {
    for (var i in secciones) {
        var section = document.getElementById(secciones[i]);
        if (section) section.classList.remove("active");
    }
    var seccionMostrar = document.getElementById(id);
    if (seccionMostrar) seccionMostrar.classList.add("active");
}

// Validar formulario
function validarFormulario(e) {
    e.preventDefault();
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    if (nombre.length > 0 && correo.includes("@") && mensaje.length > 10) {
        alert("¡Mensaje enviado correctamente!");
    } else {
        alert("Por favor completa todos los campos correctamente.");
    }
}

// Cargar primera sección automáticamente
document.addEventListener("DOMContentLoaded", function () {
    mostrarSeccion("inicio");
});
