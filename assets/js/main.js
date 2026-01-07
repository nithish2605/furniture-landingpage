let menu_bar = document.querySelector('.menu-bar');
let mobile_navbar = document.querySelector('.mobile-navbar');
let navbackdrop = document.querySelector('.nav-backdrop');

//opening mob navbar
menu_bar.addEventListener('click',openMenu);
//closing the mob navbar
document.querySelector('.close-btn').addEventListener('click',closeMenu);
navbackdrop.addEventListener('click',closeMenu);

function openMenu(){
  mobile_navbar.classList.add('active');
  navbackdrop.classList.add('active');
}

function closeMenu(){
  mobile_navbar.classList.remove('active');
  navbackdrop.classList.remove('active');
}
