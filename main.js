const mobile = document.querySelector(".mobile");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

mobile.addEventListener('click',() => {
    mobile.classList.toggle("active");
    menu.classList.toggle("active");
    bodyzd.classList.toggle("active");
})