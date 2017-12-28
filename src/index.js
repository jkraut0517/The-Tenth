import styles from '../src/assets/styles/app.scss';
import headshotSrc from '../src/assets/images/gigi-headshot-cropped.jpg';

const headshot = document.getElementById('gigi-headshot');
headshot.src = headshotSrc;

document.addEventListener('DOMContentLoaded', (event) => {
  const menu = document.getElementsByClassName('menu-nav-list')[0];
  const menuBtns = document.querySelectorAll('.menu-button');
  const menuLinks = document.querySelectorAll('nav li a');
  const main = document.getElementsByTagName('main')[0];

  // match these media queries as per the variables.scss file
  const mediumLayoutMin = matchMedia('(min-width: 48rem)');


  const toggleMenu = () => {
    if (mediumLayoutMin.matches) return;
    if (menu.classList.contains('visible')) {
      menu.classList.remove('visible');
      main.classList.remove('nav-open');
    } else {
      menu.classList.add('visible');
      main.classList.add('nav-open');
    } 
  };

  mediumLayoutMin.onchange = () => {
    if (mediumLayoutMin.matches) {
      menu.classList.remove('visible');
      main.classList.remove('nav-open');
    }
  };

main.addEventListener('click', () => {
  menu.classList.remove('visible');
  main.classList.remove('nav-open');
});

const setUpMenuToggle = () => [].forEach.call(menuBtns, btn => btn.addEventListener('click', toggleMenu));
const setUpNavLinks = () => [].forEach.call(menuLinks, link => link.addEventListener('click', toggleMenu));


setUpMenuToggle();
setUpNavLinks();
});


