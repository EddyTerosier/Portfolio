'use strict'

// Gestion du menu hamburger
const menuHamburger = document.getElementById('menu-hamburger');
const menu = document.getElementById('menu');
menuHamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
});