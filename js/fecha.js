let contenedorFecha = document.querySelector('#fecha');

window.addEventListener('load', () =>{
    let fecha = new Date();
    contenedorFecha.innerHTML = fecha.toLocaleDateString();
});