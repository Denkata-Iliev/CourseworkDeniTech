const tBody = document.getElementById("table-body");
const products = localStorage.getItem("products");
const totalPriceEl = document.getElementById("price");

const crossIconSrc = "images/cross.png";
const crossIconAlt = "cross-icon";
const crossIconClass = "cross";

function populateTable() {
    const productSplit = products.split(",");
    console.log(productSplit);
    let totalPrice = 0;
    
    if (Number(localStorage.cartClicks) > 0) {
        for (let i = 0; i < productSplit.length; i += 3) {
            const row = document.createElement("tr");
            
            const imageTd = document.createElement("td");
            imageTd.innerHTML = productSplit[i];

            const titleTd = document.createElement("td");
            titleTd.innerHTML = productSplit[i + 1];

            const priceTd = document.createElement("td");
            priceTd.innerHTML = productSplit[i + 2];
            totalPrice += Number(priceTd.innerHTML.substring(0, priceTd.innerHTML.indexOf("лв")))

            row.appendChild(imageTd);
            row.appendChild(titleTd);
            row.appendChild(priceTd);
    
            const crossIconTd = createCrossIconTd();
    
            row.appendChild(crossIconTd);
    
            tBody.appendChild(row);
        }
    }

    totalPriceEl.innerHTML = totalPrice + "лв."; 
}

function createCrossIconTd() {
    const crossIcon = document.createElement("img");
    crossIcon.setAttribute("src", crossIconSrc);
    crossIcon.setAttribute("alt", crossIconAlt);
    crossIcon.setAttribute("class", crossIconClass);
    const crossIconTd = document.createElement("td");
    crossIconTd.appendChild(crossIcon);
    return crossIconTd;
}

populateTable();
