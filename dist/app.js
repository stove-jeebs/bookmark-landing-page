"use strict";
const menuBtn = document.querySelector("#menu-btn");
const dropdown = document.querySelector('#dropdown');
const navbar = document.querySelector('nav');
const list = document.querySelector('#dropdown ul');
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", () => {
    menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.classList.toggle('open');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle('bg-translucent-blue');
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle('bg-translucent-blue');
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle('h-0');
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle('h-full');
    list === null || list === void 0 ? void 0 : list.classList.toggle('hidden');
});
