const menuPanel = document.querySelector('.menu-panel');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const panelToggle = () => {
    menuPanel?.classList.toggle('menu-toggle');
    overlay?.classList.toggle('overlay-toggle');
    body?.classList.toggle('scroll-toggle');
}

const hamburguerMenu = document.querySelector('.hambuguer-menu');
hamburguerMenu?.addEventListener('click', panelToggle);

const closeMenu = document.querySelector('.close-menu');
closeMenu?.addEventListener('click', panelToggle);

overlay?.addEventListener('click', panelToggle);

//Prevent transition on window resize
let resizeTimer: NodeJS.Timeout;
window.addEventListener("resize", () => {
  menuPanel?.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    menuPanel?.classList.remove("resize-transition-stopper");
  }, 100);
});