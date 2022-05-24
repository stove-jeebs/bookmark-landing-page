"use strict";
const menuBtn = document.querySelector("#menu-btn");
const dropdown = document.querySelector('#dropdown');
const navbar = document.querySelector('nav');
let menuOpen = false;
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", () => {
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle('bg-translucent-blue');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle('bg-translucent-blue');
    if (!menuOpen) {
        menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.classList.add("open");
        menuOpen = true;
    }
    else {
        menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.classList.remove("open");
        menuOpen = false;
    }
});
