const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector('#menu')

let menuOpen = false;

menuBtn?.addEventListener("click", () => {
	nav?.classList.toggle('hidden')
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
