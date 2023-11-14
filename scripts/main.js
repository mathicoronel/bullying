const card = document.querySelector("#experienciasContenedor");
const formulario = document.querySelector(".contenedor-textarea");
const botonEnviar = document.querySelector(".enviar-experiencia");
const contenedorMensaje = document.querySelector("#contenedor-mensaje");

const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];
mensajesGuardados.forEach((mensaje) => {
    agregarExperiencia(mensaje);
});

contenedorMensaje.minLength = 15;

botonEnviar.addEventListener("click", (event) => {
    event.preventDefault();

    const mensaje = contenedorMensaje.value.trim();
    const palabras = mensaje.split(/\s+/);

    if (palabras.length >= 15) {
        mensajesGuardados.push(mensaje);

        localStorage.setItem("mensajes", JSON.stringify(mensajesGuardados));

        agregarExperiencia(mensaje);

        contenedorMensaje.value = "";
    }
});

function agregarExperiencia(mensaje) {
    const nuevaExperiencia = document.createElement("div");
    nuevaExperiencia.classList.add("experiencias-cards");
    nuevaExperiencia.innerHTML = `<p>${mensaje}</p>`;
    
    const botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.addEventListener("click", () => {
        eliminarExperiencia(mensaje);
    });

    nuevaExperiencia.appendChild(botonEliminar);
    card.appendChild(nuevaExperiencia);
}

function eliminarExperiencia(mensaje) {
    const nuevasExperiencias = mensajesGuardados.filter((exp) => exp !== mensaje);

    localStorage.setItem("mensajes", JSON.stringify(nuevasExperiencias));

    card.removeChild(event.target.parentElement);
}
