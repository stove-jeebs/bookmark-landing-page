"use strict";
const menuBtn = document.querySelector("#menu-btn");
const dropdown = document.querySelector("#dropdown");
const navbar = document.querySelector("nav");
const dropdownList = document.querySelector("#dropdown ul");
const logoText = document.querySelector("#logo-text");
const logoCircle = document.querySelector("#logo-circle");
const logoPath = document.querySelector("#logo-path");
let isOpen = false;
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", function () {
    menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.classList.toggle("open");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("bg-translucent-blue");
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle("bg-translucent-blue");
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle("h-0");
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle("h-full");
    dropdownList === null || dropdownList === void 0 ? void 0 : dropdownList.classList.toggle("hidden");
    dropdownList === null || dropdownList === void 0 ? void 0 : dropdownList.classList.toggle("flex");
    if (!isOpen) {
        logoText.style.fill = "white";
        logoCircle.style.fill = "white";
        logoPath.style.fill = "rgba(36, 42, 69, 0.9)";
        isOpen = true;
    }
    else {
        logoText.style.fill = "rgba(36, 42, 69, 0.9";
        logoCircle.style.fill = "rgba(36, 42, 69, 0.9)";
        logoPath.style.fill = "white";
        isOpen = false;
    }
});
