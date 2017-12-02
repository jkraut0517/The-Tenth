import styles from '../src/assets/styles/app.scss';

document.addEventListener('DOMContentLoaded', function(event) {
  const menu = document.getElementsByClassName('menu-nav-list')[0];
  const menuBtn = document.getElementsByClassName('menu-button')[0];

  const toggleMenu = () => {
    if (menu.classList.contains('visible')) {
      menu.classList.remove('visible');
      menuBtn.classList.remove('is-active');
    } else {
      menu.classList.add('visible');
      menuBtn.classList.add('is-active');
    } 
  };

  const setUpMenuToggle = () => menuBtn.addEventListener('click', toggleMenu);

  setUpMenuToggle();
});
