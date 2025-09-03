(function () {
	const menu = document.getElementById("menu");
	const modal = document.getElementById("modal");
	const clone = document.getElementById("close");
	const menuNavegation = document.getElementById("menu-navegation");

	console.log(modal);
	menu.addEventListener("click", () => {
		modal.classList.toggle("menu-modal--disabled");
		menuNavegation.classList.toggle("menu-navegation--disabled");
		menu.classList.toggle("menu--disabled");
	});

	clone.addEventListener("click", () => {
		modal.classList.toggle("menu-modal--disabled");
		menuNavegation.classList.toggle("menu-navegation--disabled");
		menu.classList.toggle("menu--disabled");
	});
})();
