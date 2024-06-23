document.addEventListener("DOMContentLoaded", function() {
    const preguntas = document.querySelectorAll(".pregunta");

    preguntas.forEach(pregunta => {
        const contentPregunta = pregunta.querySelector(".content-pregunta");
        const icono = contentPregunta.querySelector("i");
        const respuesta = pregunta.querySelector(".respuesta");

        contentPregunta.addEventListener("click", () => {
            if (respuesta.classList.contains("activa")) {
                respuesta.classList.remove("activa");
                respuesta.style.maxHeight = null;
                icono.classList.remove("fa-chevron-up");
                icono.classList.add("fa-chevron-down");
            } else {
                document.querySelectorAll(".respuesta.activa").forEach(activa => {
                    activa.classList.remove("activa");
                    activa.style.maxHeight = null;
                    const activaIcono = activa.previousElementSibling.querySelector("i");
                    activaIcono.classList.remove("fa-chevron-up");
                    activaIcono.classList.add("fa-chevron-down");
                });

                respuesta.classList.add("activa");
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
                icono.classList.remove("fa-chevron-down");
                icono.classList.add("fa-chevron-up");
            }
        });
    });
});
