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