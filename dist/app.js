"use strict";
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector('#menu');
let menuOpen = false;
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", () => {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('hidden');
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});
