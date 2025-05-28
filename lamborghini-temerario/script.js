// Mostrar secciones dinámicamente
function mostrarSeccion(id) {
    var secciones = document.querySelectorAll('.section');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
}

// Variables y operaciones
var nombre = "Temerario";
var velocidadMax = 370;
var mensaje = "Este superdeportivo alcanza " + velocidadMax + " km/h.\n¡Increíble!"; // Mecanismo de escape

// Operadores
var potencia = 950;
potencia += 50; // incremento
var esElectrico = true;
var esDeportivo = true;
var mostrar = esElectrico && esDeportivo; // operador AND

// Estructuras de control
if (potencia > 900) {
    console.log("Alta potencia: " + potencia + " HP");
} else {
    console.log("Potencia media");
}

// Operaciones con texto
var marca = "Lamborghini";
console.log(marca.toUpperCase());
console.log(marca.charAt(2));
console.log(marca.substring(0, 4));

// Arreglos
var modelos = ["Huracán", "Aventador", "Temerario"];
modelos.push("Gallardo");
console.log(modelos.join(" - "));

// Números
var precio = 4500000.45678;
console.log(precio.toFixed(2)); // redondeo

// Mostrar mensaje
console.log(mensaje);
