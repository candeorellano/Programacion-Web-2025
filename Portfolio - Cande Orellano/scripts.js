// Mostrar botón "Volver arriba" al hacer scroll
const btnArriba = document.createElement("button");
btnArriba.textContent = "^";
btnArriba.id = "btnArriba"; //le asigna un id para poder seleccionarlo y estilizarlo con CSS.
btnArriba.style.display = "none"; //lo oculta inicialmente
document.body.appendChild(btnArriba); //lo agrega al final del <body> en la página

window.addEventListener("scroll", () => { //cada vez que el usuario hace scroll, se ejecuta la función
    if (window.scrollY > 200) {
        btnArriba.style.display = "block"; //si se bajó más de 200px desde arriba, mostramos el botón
    } else {
        btnArriba.style.display = "none"; //si no, lo ocultamos
    }
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"}); //Al dar clic en el botón, la ventana hace scroll suave hasta el tope
});

// Validación del formulario
const form = document.querySelector("form"); // Selecciona el primer formulario de la página

form.addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value.trim(); // value.trim() obtiene el texto ingresado y le quita espacios al principio/final
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresión regular simple para comprobar que el email tiene el formato algo@algo.algo

    if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert("Todos los campos son obligatorios");
    } else if(!regexEmail.test(email)){
        e.preventDefault();
        alert("Por favor, ingresa un email válido");
    }
});

// Mostrar/ocultar descripción de proyectos
document.querySelectorAll(".btn-ver").forEach((btn) => {
    btn.addEventListener("click", () => {
        const descripcion = btn.nextElementSibling;
        descripcion.classList.toggle("activo");

        // Cambiar texto del botón
        if (descripcion.classList.contains("activo")) {
            btn.textContent = "Ver menos";
        } else {
            btn.textContent = "Ver más";
        }
    });
});

// Mostrar fecha actual en el pie de pagina
const footer = document.querySelector("footer");// seleccionamos el footer
const fecha = new Date(); // crea la fecha/hora actual del sistema
const pFecha = document.createElement("p"); // se crea un p nuevo
pFecha.textContent = `Fecha actual: ${fecha.toLocaleDateString("es-ES")}`; // se asigna al p el contenido (la fecha)
footer.appendChild(pFecha); // se añade el p al footer
