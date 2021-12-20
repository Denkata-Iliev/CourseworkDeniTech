const cart = document.getElementsByClassName("cart");
const totalCart = document.getElementById("cart-total");
const clearCartElement = document.getElementById("clear-cart");

clearCartElement.addEventListener("click", clearCart);

for (let i = 0; i < cart.length; i++) {
  const element = cart[i];
  element.addEventListener("click", addToCart);
}

function initTotalCart() {
  if (localStorage.cartClicks) {
    totalCart.innerHTML = localStorage.cartClicks;
  } 
}

initTotalCart();

function addToCart() {
  if (localStorage.cartClicks) {
      localStorage.cartClicks = Number(localStorage.cartClicks) + 1;
    } else {
      localStorage.cartClicks = 1;
    }
    totalCart.innerHTML = localStorage.cartClicks;
}

function clearCart() {
  localStorage.cartClicks -= Number(localStorage.cartClicks);
  totalCart.innerHTML = localStorage.cartClicks;
}