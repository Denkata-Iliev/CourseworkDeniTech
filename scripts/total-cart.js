const tBody = document.getElementById("table-body");
const products = localStorage.products;
const totalPriceEl = document.getElementById("price");

const orderBtn = document.getElementById("order-btn");
const clearBtn = document.getElementById("clear-btn");

orderBtn.addEventListener("click", order);
clearBtn.addEventListener("click", clearCart);

let totalPrice = 0;
function populateTable() {
    const productSplit = products.split(",");
    console.log(products);
    
    if (Number(localStorage.cartClicks) > 0) {
        for (let i = 0; i < productSplit.length; i += 3) {
            const row = document.createElement("tr");
            
            const imageTd = document.createElement("td");
            imageTd.innerHTML = productSplit[i];

            const titleTd = document.createElement("td");
            titleTd.innerHTML = productSplit[i + 1];

            const priceTd = document.createElement("td");
            priceTd.innerHTML = productSplit[i + 2];
            priceTd.className = "product-price";
            totalPrice += Number(priceTd.innerHTML.substring(0, priceTd.innerHTML.indexOf("лв")))

            row.appendChild(imageTd);
            row.appendChild(titleTd);
            row.appendChild(priceTd);
    
            tBody.appendChild(row);
        }
    } else {
        const row = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = "Все още няма нищо в количката.";
        row.appendChild(td);
        tBody.appendChild(row);
    }

    totalPriceEl.innerHTML = totalPrice + "лв."; 
}

populateTable();

function clearCart() {
    const confirmText = "Сигурни ли сте, че искате да изчистите количката?";
    if (confirm(confirmText)) {
        clearTableAndLocalStorage();
    } else {
        return;
    }
}

function order() {
    alert(`Успешно закупихте ${Number(localStorage.cartClicks)} продукта на стойност ${totalPrice}лв.`);
    clearTableAndLocalStorage();
    location.reload();
}

function clearTableAndLocalStorage() {
  localStorage.cartClicks -= Number(localStorage.cartClicks);
  localStorage.products = [];
  location.reload();
}
