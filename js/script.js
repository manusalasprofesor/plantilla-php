let btnMenu = document.querySelector('#btn-menu');
let aspa = document.querySelector('#cruz');
let menu = document.querySelector('#menu');
let subMenuBtn = document.querySelectorAll('.submenu-btn');


// Muestra el menú toggle o lo oculta
btnMenu.addEventListener('click', muestraMenu);

function muestraMenu() {
    menu.classList.toggle('mostrar');
    btnMenu.classList.toggle('active');
    aspa.classList.toggle('fa-times');
}


