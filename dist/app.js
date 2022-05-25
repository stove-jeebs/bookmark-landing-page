"use strict";
const menuBtn = document.querySelector("#menu-btn");
const dropdown = document.querySelector("#dropdown");
const navbar = document.querySelector("nav");
const dropdownList = document.querySelector("#dropdown ul");
const logoText = document.querySelector("#logo-text");
const logoCircle = document.querySelector("#logo-circle");
const logoPath = document.querySelector("#logo-path");
const main = document.querySelector("main");
let isOpen = false;
// menu button
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("overflow-hidden");
    menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.classList.toggle("open");
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("bg-translucent-blue");
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle("bg-translucent-blue");
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle("h-0");
    dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle("h-full");
    dropdownList === null || dropdownList === void 0 ? void 0 : dropdownList.classList.toggle("hidden");
    dropdownList === null || dropdownList === void 0 ? void 0 : dropdownList.classList.toggle("flex");
    main === null || main === void 0 ? void 0 : main.classList.toggle("blur-[1px]");
    if (!isOpen) {
        logoText.style.fill = "white";
        logoCircle.style.fill = "white";
        logoPath.style.fill = "rgba(36, 42, 69, 0.9)";
        isOpen = true;
    }
    else {
        logoText.style.fill = "rgba(36, 42, 69, 0.9";
        logoCircle.style.fill = "#5267DF";
        logoPath.style.fill = "white";
        isOpen = false;
    }
});
// features tab
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach((tabContent) => {
            tabContent.classList.add("hidden");
            tabContent.classList.remove("flex");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("text-bookmark-blue");
            tab.classList.remove("md:border-b-4");
        });
        target.classList.remove("hidden");
        target.classList.add("flex");
        tab.classList.add("text-bookmark-blue");
        tab.classList.add("md:border-b-4");
    });
});
