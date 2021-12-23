const navIcon = document.getElementById("mobile-menu");
const navElement = document.getElementsByTagName("nav")[0];
const navItems = document.getElementsByClassName("p20");
const respNav = document.getElementById("resp-nav");

const dropDownListItem = document.getElementsByClassName("dropdown")[0];
const dropDownElement = document.getElementsByClassName("drop-items")[0];
const dropDownItems = document.getElementsByClassName("p10");

const tabletBreakpoint = "(max-width: 768px)";
const transparentBlue = "rgba(4, 51, 204, 0.9)";
const normalNavBlue = "#0433cc";

let isNavExpanded = false;
let isDropdownExpanded = false;
navIcon.addEventListener("click", function () {
    if (isNavExpanded) {
        collapseMenu();
    } else {
        expandMenu()
    }

    isNavExpanded = !isNavExpanded;
});

function expandMenu() {
    if (window.matchMedia(tabletBreakpoint).matches) {
        navElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        navIcon.style.backgroundColor = normalNavBlue;
        respNav.style.backgroundColor = transparentBlue;

        respNav.style.display = "block";
        respNav.style.height = "100vh";

        for (let i = 0; i < navItems.length; i++) {
            const element = navItems[i];
            element.style.display = "block";
        }
    }
}

function collapseMenu() {
    if (window.matchMedia(tabletBreakpoint).matches) {
        respNav.style.height = "100%";

        for (let i = 0; i < navItems.length; i++) {
            const element = navItems[i];
            element.style.display = "none";
        }

        isDropdownExpanded = false;
    }
}

dropDownListItem.addEventListener("click", function () {
    if (window.matchMedia(tabletBreakpoint).matches) {
	if (isDropdownExpanded) {
            collapseDropdown();
        } else {
            expandDropdown();
        }

	isDropdownExpanded = !isDropdownExpanded;
    }
});


function expandDropdown() {
    dropDownElement.style.position = "relative";
    for (let i = 0; i < dropDownItems.length; i++) {
        const element = dropDownItems[i];
        element.style.display = "block";
        element.style.textAlign = "center";
    } 
};

function collapseDropdown() {
    dropDownElement.style.position = "absolute";
    for (let i = 0; i < dropDownItems.length; i++) {
        const element = dropDownItems[i];
        element.style.display = "none";
    } 
};

