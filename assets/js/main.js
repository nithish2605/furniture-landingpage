//getting the elements
let menu_bar = document.querySelector('.menu-bar');
let mobile_navbar = document.querySelector('.mobile-navbar');
let navbackdrop = document.querySelector('.nav-backdrop');
let product_box = document.querySelector('.product-container');
let cart_btn = document.querySelector('.cart-btn');

//products array
let products = [
  {
    id: '1',
    proname: 'sofa',
    price: '1200',
    path: 'assets/images/sofa.png',
  },
  {
    id: '2',
    proname: 'bed',
    price: '18000',
    path: 'assets/images/bed.png',
  },
  {
    id: '3',
    proname: 'dressing table',
    price: '20000',
    path: 'assets/images/dressing table.png',
  }
];

let cart_items = [];


//opening mob navbar
menu_bar.addEventListener('click', openMenu);
//closing the mob navbar
document.querySelector('.close-btn').addEventListener('click', closeMenu);
navbackdrop.addEventListener('click', closeMenu);

function openMenu() {
  mobile_navbar.classList.add('active');
  navbackdrop.classList.add('active');
}

function closeMenu() {
  mobile_navbar.classList.remove('active');
  navbackdrop.classList.remove('active');
}

//to display prodcuts array
products.forEach(p => {
  product_box.innerHTML += `<div class="col-lg-4 col-sm-6">
                <div class="product-card p-sm-3 p-2">
                    <div class="pro-img-box text-center">
                        <img class="img-fluid" src="${p.path}" alt="product-image">
                    </div>
                    <div class="pro-body d-flex flex-column gap-2 mb-3">
                        <h5 class="m-0">${p.proname}</h5>
                        <p class="m-0 ">Price : ₹${p.price}</p>
                    </div>
                    <div class="action-btns d-flex justify-content-between flex-column flex-xl-row gap-3">
                        <button class="default-btn cart-btn text-center w-100">Add to cart</button>
                        <button class="buy-now-btn  w-100">Buy Now</button>
                    </div>
                </div>
            </div>`
});

//add to cart function
// cart_btn.addEventListener('click',()=>{

// });