'use strict';
// Select Element
const navHamburgerEl = document.querySelector('.nav-icon');

// Event listener
navHamburgerEl.addEventListener('click', () => {
  navHamburgerEl.parentElement.classList.toggle('show');
});
