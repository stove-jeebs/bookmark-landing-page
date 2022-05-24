const menuBtn = document.querySelector("#menu-btn");
const dropdown = document.querySelector('#dropdown')
const navbar = document.querySelector('nav')

let menuOpen = false;

menuBtn?.addEventListener("click", () => {
	dropdown?.classList.toggle('bg-translucent-blue')
	navbar?.classList.toggle('bg-translucent-blue')
  if (!menuOpen) {
    menuBtn?.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn?.classList.remove("open");
    menuOpen = false;
  }
});
