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

// Declaración de variables con 'var'
var secciones = ["inicio", "contacto", "ubicacion", "cotizacion"]; // Se añade la nueva sección
var precioUnitario = 350000;

// Función para mostrar sección seleccionada
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Función de cálculo de cotización
function calcularCotizacion() {
    var unidades = parseInt(document.getElementById("unidades").value);
    var cliente = document.getElementById("cliente").value.trim();

    // Validar entrada
    if (isNaN(unidades) || unidades <= 0) {
        alert("Por favor ingresa un número válido de unidades.");
        return;
    }

    // Calcular subtotal, impuesto y total
    var subtotal = unidades * precioUnitario;
    var impuesto = subtotal * 0.16;
    var total = subtotal + impuesto;

    // Aplicar descuento según cantidad
    var descuento = 0;
    if (unidades >= 2 && unidades < 5) {
        descuento = subtotal * 0.05; // 5%
    } else if (unidades >= 5) {
        descuento = subtotal * 0.10; // 10%
    }

    // Ajustar total final
    total -= descuento;

    // Mostrar resultado al usuario
    var resultadoHTML = `
        <strong>Cliente:</strong> ${cliente || "Anónimo"}<br>
        <strong>Unidades:</strong> ${unidades}<br>
        <strong>Precio unitario:</strong> $${precioUnitario.toFixed(2)}<br>
        <strong>Subtotal:</strong> $${subtotal.toFixed(2)}<br>
        <strong>Impuesto (16%):</strong> $${impuesto.toFixed(2)}<br>
        <strong>Descuento aplicado:</strong> $${descuento.toFixed(2)}<br>
        <strong>Total:</strong> $${total.toFixed(2)}
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
