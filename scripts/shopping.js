const cart = document.getElementsByClassName('cart');
const totalCart = document.getElementById('cart-total');

const productImages = document.getElementsByClassName('product-wrapper');
const productTitles = document.getElementsByClassName('title-specs');
const productPrices = document.getElementsByClassName('price-buy');
let products = [];

for (let i = 0; i < cart.length; i++) {
  const element = cart[i];

  element.addEventListener('click', () => {
    const image = getFirstElementChildInnerHtml(productImages[i]);
    const title = getFirstElementChildInnerHtml(productTitles[i]);
    const price = getFirstElementChildInnerHtml(productPrices[i]);

    const singleProduct = {
      id: Number(localStorage.id) + 1,
      image: image,
      title: title,
      price: price
    };

    products.push(singleProduct);

    addToCart();
  });
}

function getFirstElementChildInnerHtml(element) {
  return element.firstElementChild.innerHTML;
}

function initTotalCart() {
  if (localStorage.cartClicks) {
    totalCart.innerHTML = localStorage.cartClicks;
  }

  if (localStorage.products) {
    const localStorageProducts = JSON.parse(localStorage.products);
    products = localStorageProducts;
  }
}

initTotalCart();

function addToCart() {
  if (localStorage.cartClicks) {
    localStorage.cartClicks = Number(localStorage.cartClicks) + 1;
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.id = Number(localStorage.id) + 1;
  } else {
    localStorage.cartClicks = 1;
    localStorage.id = 0;
  }

  totalCart.innerHTML = localStorage.cartClicks;
}
