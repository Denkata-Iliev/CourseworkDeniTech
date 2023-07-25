const tBody = document.getElementById('table-body');
const totalPriceEl = document.getElementById('price');

const orderBtn = document.getElementById('order-btn');
const clearBtn = document.getElementById('clear-btn');

orderBtn.addEventListener('click', order);
clearBtn.addEventListener('click', clearCart);

const DELETE_ICON_SIZE = '64px';
const DELETE_ICON_HTML = `<img src='images/cross.png' alt='delete-icon' style='width: ${DELETE_ICON_SIZE}; height: ${DELETE_ICON_SIZE}'/>`;

let totalPrice = 0;
let products = [];
function populateTable() {
    if (localStorage.products) {
        products = JSON.parse(localStorage.products);
    }

    console.log(products);

    if (products.length <= 0) {
        noProductsInCart();
        return;
    }

    products.forEach(element => {
        const row = document.createElement('tr');

        const imageTd = createElementWithInnerHtml('td', element.image);

        const titleTd = createElementWithInnerHtml('td', element.title);

        const priceTd = createElementWithInnerHtml('td', element.price);
        priceTd.className = 'product-price';

        totalPrice += parsePriceFromText(priceTd.innerHTML);

        const crossTd = createElementWithInnerHtml('td', DELETE_ICON_HTML);
        crossTd.style.cursor = 'pointer';
        crossTd.addEventListener('click', () => removeItemFromCart(element, priceTd.innerHTML, row));

        row.appendChild(imageTd);
        row.appendChild(titleTd);
        row.appendChild(priceTd);
        row.appendChild(crossTd);

        tBody.appendChild(row);
    })

    updateTotalPriceElement(totalPrice);
}

populateTable();

function noProductsInCart() {
    const row = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = 'Все още няма нищо в количката.';
    row.appendChild(td);
    tBody.appendChild(row);
    totalPriceEl.textContent = '0лв.';
}

function removeItemFromCart(elementToRemove, priceText, row) {
    products = products.filter(el => el.id !== elementToRemove.id);
    totalPrice -= parsePriceFromText(priceText);
    updateTotalPriceElement(totalPrice);

    tBody.removeChild(row);

    localStorage.products = JSON.stringify(products);
    localStorage.cartClicks = Number(localStorage.cartClicks) - 1;

    if (products.length <= 0) {
        noProductsInCart();
    }
}

function createElementWithInnerHtml(elementTag, innerHtml) {
    const el = document.createElement(elementTag);
    el.innerHTML = innerHtml;

    return el
}

function updateTotalPriceElement(totalPrice) {
    totalPriceEl.textContent = `${totalPrice}лв.`;
}

function parsePriceFromText(text) {
    return Number(text.substring(0, text.indexOf('лв')))
}

function clearCart() {
    const confirmText = 'Сигурни ли сте, че искате да изчистите количката?';
    if (confirm(confirmText)) {
        clearTableAndLocalStorage();
    }
}

function order() {
    alert(`Успешно закупихте ${Number(localStorage.cartClicks)} продукта на стойност ${totalPrice}лв.`);
    clearTableAndLocalStorage();
    location.reload();
}

function clearTableAndLocalStorage() {
    localStorage.cartClicks -= Number(localStorage.cartClicks);
    localStorage.id = 0;
    localStorage.products = [];
    location.reload();
}
