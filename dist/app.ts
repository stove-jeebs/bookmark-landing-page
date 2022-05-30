const menuBtn = document.querySelector("#menu-btn") as HTMLButtonElement;
const menu = document.querySelector("#menu") as HTMLDivElement;
const navbar = document.querySelector("nav") as HTMLDivElement;
const dropdownList = document.querySelector("#menu ul") as HTMLUListElement;
const logoText = document.querySelector("#logo-text") as SVGPathElement;
const logoCircle = document.querySelector("#logo-circle") as SVGCircleElement;
const logoPath = document.querySelector("#logo-path") as SVGPathElement;
const main = document.querySelector("main");

let isOpen = false;

// menu button

menuBtn?.addEventListener("click", function () {
  document.body.classList.toggle("overflow-hidden");
  menuBtn?.classList.toggle("open");
  navbar?.classList.toggle("bg-translucent-blue");
  menu?.classList.toggle("bg-translucent-blue");
  menu?.classList.toggle("h-0");
  menu?.classList.toggle("h-full");
  dropdownList?.classList.toggle("hidden");
  dropdownList?.classList.toggle("flex");
  main?.classList.toggle("blur-[1px]");
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
      tab.firstElementChild?.classList.remove("border-b-4");
    });
    target.classList.remove("hidden");
    target.classList.add("flex");
    tab.classList.add("text-bookmark-blue");
    tab.classList.add("md:border-b-4");
    tab.firstElementChild?.classList.add("border-b-4");
  });
});

// FAQ dropdown

const dropdown = document.querySelectorAll(".dropdown") as NodeListOf<HTMLDivElement>;

dropdown.forEach((faq) => {
  faq.addEventListener("click", () => {
    const arrow = faq.querySelector(".arrow") as SVGPathElement;
    faq.nextElementSibling?.classList.toggle("h-0");
    faq.nextElementSibling?.classList.toggle("scale-y-0");
    faq.nextElementSibling?.classList.toggle("mb-8");
    faq.lastElementChild?.classList.toggle("rotate-180");
    arrow.classList.toggle("stroke-bookmark-red");
  });
});

// email validation

const email = document.querySelector("#email") as HTMLInputElement;
const submit = document.querySelector("#submit") as HTMLButtonElement;

function ValidateEmail(mail: HTMLInputElement) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}

submit?.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!ValidateEmail(email)) {
    event.preventDefault();
    email.classList.add("invalid-email");
    email.classList.add("invalid-email");
    email.classList.add("placeholder:text-red-900");
  }
});

email.addEventListener("input", () => {
  email.classList.remove("invalid-email");
  email.classList.remove("placeholder:text-red-900");
});