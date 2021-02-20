const menuToggle = document.querySelector("#menu-toggle");
const toggledMenu = menuToggle.addEventListener('click', (e) => {
    menuToggle.classList.add("active");
});