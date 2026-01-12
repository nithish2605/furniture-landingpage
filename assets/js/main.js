//getting the elements
let menu_bar = document.querySelector('.menu-bar');
let mobile_navbar = document.querySelector('.mobile-navbar');
let navbackdrop = document.querySelector('.nav-backdrop');
let product_box = document.querySelector('.product-container');
let view_Cart = document.querySelector('.view-cart');
let cart_box = document.querySelector('.cart-box-wrapper');
let total_price = document.querySelector('.total-price');
let mob_nav_links =document.querySelectorAll('.mob-nav-link');

//opening mob navbar
menu_bar.addEventListener('click', openMenu);
//closing the mob navbar
document.querySelector('.close-btn').addEventListener('click', closeMenu);
navbackdrop.addEventListener('click', closeMenu);
mob_nav_links.forEach(m => m.addEventListener('click',closeMenu));

function openMenu() {
  mobile_navbar.classList.add('active');
  navbackdrop.classList.add('active');
}

function closeMenu() {
  mobile_navbar.classList.remove('active');
  navbackdrop.classList.remove('active');
}

//products 
let products = [
  {
    id: '1',
    proname: 'sofa',
    price: '15000',
    path: 'assets/images/sofa.png',
  },
  {
    id: '2',
    proname: 'bed',
    price: '16600',
    path: 'assets/images/bed.png',
  },
  {
    id: '3',
    proname: 'dressing table',
    price: '18000',
    path: 'assets/images/dressing table.png',
  }
];

//To store adding products
let cart_items = [];

//To display prodcuts array
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
                        <button class="default-btn add-cart-btn text-center w-100" data-id="${p.id}">Add to cart</button>
                        <button class="buy-now-btn  w-100">Buy Now</button>
                    </div>
                </div>
            </div>`
});

let add_cart_btns = document.querySelectorAll('.add-cart-btn');
let cart_counter = document.querySelector('.cart-counter');
let increase_counter = 0;

//add to cart function
add_cart_btns.forEach(c => {
  addToCart(c);
});

//view cart
view_Cart.addEventListener('click', () => {
  cart_box.classList.add('active');
  renderCartItems();
});

//close cart box
document.querySelector('.cartbox-close-btn').addEventListener('click', () => {
  cart_box.classList.remove('active');
});

//display the cart items
let cart_items_wrapper = document.querySelector('.cart-items-wrapper');

// function to add items to cart
function addToCart(c) {
  c.addEventListener('click', () => {
    increase_counter++;
    cart_counter.innerText = increase_counter;
    let item_id = c.dataset.id;
    const existing_item = cart_items.find(ci => ci.id === item_id);

    if (existing_item) {
      existing_item.qty += 1;
    }
    else {
      let getproduct = products.find(i => i.id === item_id);
      cart_items.push({
        ...getproduct,
        qty: 1
      });
    }
    renderCartItems();
  }); 
}

// function to render cart items
function renderCartItems() {
  cart_items_wrapper.innerHTML = "";
  cart_counter.innerText = increase_counter;

  if (cart_items.length == 0)
    return cart_items_wrapper.innerHTML += `
  <h4 class="mt-3 text-center">Your Cart is empty</h4>
  <p class="text-center">Add products to checkout !</p>`;

  cart_items.forEach(c => {
    cart_items_wrapper.innerHTML += `
  <div class="cart-items mt-3">
                        <div class="row align-items-center">
                            <div class="col-4">
                                <img class="img-fluid" src='${c.path}' alt="">
                            </div>
                            <div class="col-8">
                                <h6>${c.proname}</h6>
                                <p>₹${c.price}</p>
                                <div class="quantity-btns bg-grey text-center fw-bold">
                                    <div class="row justify-content-between align-items-center">
                                        <div class="col-4">
                                            <button class="btn btn-dec-q text-white bg-grey" data-id=${c.id}>-</button>
                                        </div>
                                        <div class="col-4">
                                            <small>${c.qty}</small>
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-inc-q text-white bg-grey" data-id=${c.id}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
  });
  //calculating total price
  total_price.innerText = cart_items.reduce((sum, item) => {
    return sum + (item.price * item.qty);
  }, 0);
}

cart_items_wrapper.addEventListener('click', (e) => {

  let inc_quantity_btn = e.target.closest('.btn-inc-q');
  let dec_quantity_btn = e.target.closest('.btn-dec-q');

  //increase quantity
  if (inc_quantity_btn) {
    let itemId = inc_quantity_btn.dataset.id;
    let inc_curr_Item = cart_items.find(i => i.id === itemId);
    if (inc_curr_Item) {
      inc_curr_Item.qty++;
      cart_counter.innerText = increase_counter++;
    }
  }
  //decrease quantity
  if (dec_quantity_btn) {
    let itemId = dec_quantity_btn.dataset.id;
    let dec_curr_Item = cart_items.find(i => i.id === itemId);
    if (dec_curr_Item) {
      dec_curr_Item.qty--;
      cart_counter.innerText = increase_counter--;
      if (dec_curr_Item.qty <= 0) {
        cart_items = cart_items.filter(i => i.id != itemId);
        total_price.innerText = 0;
      }
    }
  }
  renderCartItems();
})