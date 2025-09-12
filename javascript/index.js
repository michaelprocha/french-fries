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

	const btnOrderNow = document.querySelector(".dishes__button");
	setInterval(() => {
		btnOrderNow.classList.add("shine");
	}, 2500)

	setInterval(() => {
		btnOrderNow.classList.remove("shine");
	}, 1000)

	const testimonials = Array.from(document.getElementsByClassName("testimonials__text"));
	const users = Array.from(document.getElementsByClassName("user"));

	users.forEach((user, position, arr) => {
		user.addEventListener("click", () => {
			if (position == 0) {
				testimonials[position].classList.add("testimonials__text--show");
				testimonials[1].classList.remove("testimonials__text--show");
				arr[position].classList.add("user--show");
				arr[1].classList.remove("user--show");
			}else{
				testimonials[position].classList.add("testimonials__text--show");
				testimonials[0].classList.remove("testimonials__text--show");
				arr[position].classList.add("user--show");
				arr[0].classList.remove("user--show");
			}
		});
	});
})();