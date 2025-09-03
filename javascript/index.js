(function () {
    const menu = document.getElementById("menu");
    const modal = document.getElementById("modal");
    console.log(modal);
    menu.addEventListener("click", () => {
        modal.classList.toggle("menu-modal");
    });
})();