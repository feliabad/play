/*menu desplegable*/ 
"use strict"

let btntoggle = document.querySelector('#btn-open');
btntoggle.addEventListener('click', toggleMenu);

function toggleMenu(){
    let menu = document.querySelector('.nav');
    menu.classList.toggle('open');
}

/*modo oscuro*/ 

let modo = document.querySelector('#modo-oscuro');
modo.addEventListener('click', oscuro);

function oscuro() {
    document.body.classList.toggle ('modo');
}

/*capcha*/
// Funcion para crear el captcha
function generarCaptcha() {
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += generarLetraAleatoria();
    }
    document.getElementById("captcha").textContent = captcha;
}

function generarLetraAleatoria() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}

// Validar el captcha
function validarCaptcha(event) {
    event.preventDefault();
    let captcha = document.getElementById("captcha").textContent;
    let inputCaptcha = document.getElementById("inputCaptcha").value;
    let mensaje = document.getElementById("mensaje");

    if (inputCaptcha === captcha) {
        mensaje.textContent = "Captcha válido. ¡Formulario enviado!";
        mensaje.style.color = "green";
        document.getElementById("formContacto").reset();
        generarCaptcha();
    } else {
        mensaje.textContent = "Captcha inválido. Por favor, inténtalo de nuevo.";
        mensaje.style.color = "red";
    }
}

// Iniciar el captcha cuando la pagina cargue
window.onload = function() {
    generarCaptcha();
    document.getElementById("generarNuevoCaptcha").addEventListener("click", generarCaptcha);
    document.getElementById("formContacto").addEventListener("submit", validarCaptcha);
}
