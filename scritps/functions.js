/**
 * Taller de Manipulación del DOM
 * Autor: Ramirez
 * Archivo: scritps/functions.js
 */

// 1. Modificar contenido textual
function cambiarTextoEstado() {
    const elementoEstado = document.getElementById("parrafo-estado");
    if (elementoEstado) {
        elementoEstado.textContent = "El contenido ha sido actualizado exitosamente mediante el DOM.";
        elementoEstado.style.color = "#28a745";
    }
}

function restablecerTextoEstado() {
    const elementoEstado = document.getElementById("parrafo-estado");
    if (elementoEstado) {
        elementoEstado.textContent = "Estado inicial: sin cambios.";
        elementoEstado.style.color = "";
    }
}

// 2. Crear e insertar elementos en el árbol jerárquico
function agregarElementoLista() {
    const input = document.getElementById("input-item");
    const lista = document.getElementById("lista-dinamica");

    if (!input || !lista) return;

    const texto = input.value.trim();

    if (texto === "") {
        alert("Ingrese un texto antes de agregar.");
        return;
    }

    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;

    lista.appendChild(nuevoItem);
    input.value = "";
    input.focus();
}

// 3. Eliminar elementos del DOM
function eliminarUltimoElemento() {
    const lista = document.getElementById("lista-dinamica");
    if (!lista) return;

    const ultimoHijo = lista.lastElementChild;
    if (ultimoHijo) {
        ultimoHijo.remove();
    } else {
        alert("No quedan más elementos por eliminar en la lista.");
    }
}

// 4. Alternar clases CSS
function alternarClaseAlerta() {
    const parrafo = document.getElementById("texto-alerta");
    if (parrafo) {
        parrafo.classList.toggle("resaltado");
    }
}
