// script.js - Adaptado según rubrica de variables, operadores, estructuras y buenas practicas

// Declaración de variables con 'var'
var secciones = ["inicio", "contacto", "ubicacion"];
var contadorAcceso = 0;

// Incremento del contador cada vez que carga la página
contadorAcceso++;
console.log("La página ha sido cargada " + contadorAcceso + " veces");

// Ejemplo de cadena con caracteres escapados
var mensajeBienvenida = "Bienvenido al sitio oficial del Temerario\\nDisfruta de su poder.";
console.log(mensajeBienvenida);

// Arreglo de modelos Lamborghini
var modelos = ["Aventador", "Huracán", "Urus", "Temerario"];

// Uso de propiedades y métodos de arreglos
console.log("Modelos disponibles:", modelos.join(", "));
modelos.push("Revuelto");
console.log("Nuevo modelo añadido:", modelos[modelos.length - 1]);

// Uso de funciones de string
var texto = "El Temerario es un superdeportivo híbrido";
console.log("Texto en mayúsculas: " + texto.toUpperCase());
console.log("Primera letra: " + texto.charAt(0));
console.log("Subcadena: " + texto.substring(3, 12));

// Uso de estructuras de control
function mostrarSeccion(id) {
    // Ocultar todas las secciones
    for (var i in secciones) {
        var section = document.getElementById(secciones[i]);
        if (section) {
            section.classList.remove("active");
        }
    }

    // Mostrar solo la seleccionada
    var seccionMostrar = document.getElementById(id);
    if (seccionMostrar) {
        seccionMostrar.classList.add("active");
        console.log("Sección mostrada: " + id);
    } else {
        console.error("Sección no encontrada: " + id);
    }
}

// Validación simple de número
function validarNumero(valor) {
    if (!isNaN(valor)) {
        console.log("Es un número válido: " + valor);
    } else {
        console.warn("No es un número válido.");
    }
}

validarNumero(123);      // Número válido
validarNumero("texto");  // No es número

// Uso de comentarios para explicar operaciones
// Formatear número a dos decimales
var precio = 350000.456;
console.log("Precio formateado: $" + precio.toFixed(2));
