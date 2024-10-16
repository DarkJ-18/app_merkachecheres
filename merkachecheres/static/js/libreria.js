document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x'); // Cambia el ícono del menú
        navbar.classList.toggle('open'); // Muestra/oculta la barra de navegación
    };
});
