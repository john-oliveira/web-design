const menuPanel = document.querySelector('.menu-panel');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const panelToggle = () => {
    menuPanel.classList.toggle('menu-toggle');
    overlay.classList.toggle('overlay-toggle');
    body.classList.toggle('scroll-toggle');
}

const hamburguerMenu = document.querySelector('.hambuguer-menu');
hamburguerMenu.addEventListener('click', panelToggle);

const closeMenu = document.querySelector('.close-menu');
closeMenu.addEventListener('click', panelToggle);

overlay.addEventListener('click', panelToggle);