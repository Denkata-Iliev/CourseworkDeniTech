const cart = document.getElementsByClassName("cart");
const totalCart = document.getElementById("cart-total");
const clearCartElement = document.getElementById("clear-cart");

const productImages = document.getElementsByClassName("product-wrapper");
const productTitles = document.getElementsByClassName("title-specs");
const productPrices = document.getElementsByClassName("price-buy");
const products = [];

clearCartElement.addEventListener("click", clearCart);

for (let i = 0; i < cart.length; i++) {
  const element = cart[i];
  element.addEventListener("click", function () {
    const image = productImages[i].firstElementChild.innerHTML;
    const title = productTitles[i].firstElementChild.innerHTML;
    const price = productPrices[i].firstElementChild.innerHTML;
    const singleProduct = [image, title, price];

    products.push(singleProduct);
    
    addToCart();
  });
  
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
      localStorage.setItem("products", products);
    } else {
      localStorage.cartClicks = 1;
    }
    totalCart.innerHTML = localStorage.cartClicks;

    
}

function clearCart() {
  localStorage.cartClicks -= Number(localStorage.cartClicks);
  totalCart.innerHTML = localStorage.cartClicks;
  products.length = 0;
  localStorage.setItem("products", products);
}