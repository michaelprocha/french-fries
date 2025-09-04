(function () {
	const menu = document.getElementById("menu");
	const modal = document.getElementById("modal");
	const close = document.getElementById("close");
	const menuNavegation = document.getElementById("menu-navegation");

	menu.addEventListener("click", () => {
		if (modal.classList.contains("menu-modal--disabled")) {
			modal.classList.remove("menu-modal--disabled");
			menuNavegation.classList.remove("menu-navegation--disabled");
		}
		menu.classList.toggle("menu--disabled");
		modal.classList.remove("close-animation");
		menuNavegation.classList.remove("slide-out");
	});

	close.addEventListener("click", () => {
		menu.classList.toggle("menu--disabled");
		modal.classList.add("close-animation");
		menuNavegation.classList.add("slide-out");
	});

	const arrow = document.querySelector(".hero__button img");

	setInterval(() => {
		arrow.classList.toggle("animation-arrow");
	}, 3000);
})();
