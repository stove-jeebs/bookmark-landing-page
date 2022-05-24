const menuBtn = document.querySelector("#menu-btn");
const dropdown = document.querySelector('#dropdown')
const navbar = document.querySelector('nav')
const list = document.querySelector('#dropdown ul')

menuBtn?.addEventListener("click", () => {
	menuBtn?.classList.toggle('open')
	navbar?.classList.toggle('bg-translucent-blue')
	dropdown?.classList.toggle('bg-translucent-blue')
	dropdown?.classList.toggle('h-0')
	dropdown?.classList.toggle('h-full')
	list?.classList.toggle('hidden')
});
