let menu_bar = document.querySelector('.menu-bar');
let mobile_navbar = document.querySelector('.mobile-navbar');

menu_bar.addEventListener('click',()=>{
  mobile_navbar.classList.add('active');
})