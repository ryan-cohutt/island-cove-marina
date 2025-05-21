const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector("#side-menu");
const menuIcon = document.querySelector("#menu");
const xIcon = document.querySelector("#x");

hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    menuIcon.classList.toggle("svg-active");
    xIcon.classList.toggle("svg-active");
});