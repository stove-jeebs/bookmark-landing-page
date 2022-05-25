const menuBtn = document.querySelector("#menu-btn") as HTMLButtonElement;
const dropdown = document.querySelector("#dropdown") as HTMLDivElement;
const navbar = document.querySelector("nav") as HTMLDivElement;
const dropdownList = document.querySelector("#dropdown ul") as HTMLUListElement;
const logoText = document.querySelector("#logo-text") as SVGPathElement;
const logoCircle = document.querySelector("#logo-circle") as SVGCircleElement;
const logoPath = document.querySelector("#logo-path") as SVGPathElement;
const main = document.querySelector('main')

let isOpen = false;

menuBtn?.addEventListener("click", function () {
  document.body.classList.toggle('overflow-hidden')
  menuBtn?.classList.toggle("open");
  navbar?.classList.toggle("bg-translucent-blue");
  dropdown?.classList.toggle("bg-translucent-blue");
  dropdown?.classList.toggle("h-0");
  dropdown?.classList.toggle("h-full");
  dropdownList?.classList.toggle("hidden");
  dropdownList?.classList.toggle("flex");
  main?.classList.toggle('blur-[1px]')
  if (!isOpen) {
    logoText!.style.fill = "white";
    logoCircle!.style.fill = "white";
    logoPath!.style.fill = "rgba(36, 42, 69, 0.9)";
    isOpen = true;
  } else {
    logoText!.style.fill = "rgba(36, 42, 69, 0.9";
    logoCircle!.style.fill = "#5267DF";
    logoPath!.style.fill = "white";
    isOpen = false;
  }
});
