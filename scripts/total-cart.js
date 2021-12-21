const tBody = document.getElementById("table-body");
const products = localStorage.products;
// const cross = '<img src="images/cross.png" alt="cross-icon" class="cross">';
const crossIconSrc = "images/cross.png";
const crossIconAlt = "cross-icon";
const crossIconClass = "cross";

function ss() {
    
}


function kurec() {
    const productSplit = products.split(",");
    
    if (Number(localStorage.cartClicks) > 0) {
        for (let i = 0; i < productSplit.length / 3; i++) {
            const row = document.createElement("tr");
            const cells = [];
            
            for (let j = 0; j < productSplit.length; j++) {
                const cell = document.createElement("td");
                cell.innerHTML = productSplit[j];
                cells[j] = cell;
            }
    
            const crossIconTd = createCrossIconTd();
    
            for (let j = 0; j < cells.length; j++) {
                row.appendChild(cells[j]);
            }
    
            row.appendChild(crossIconTd);
    
            tBody.appendChild(row);
        }
        
    }
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
