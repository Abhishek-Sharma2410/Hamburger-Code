let hamburgerMenu = document.getElementById("hamburger");
let close = document.querySelector(".ri-close-circle-line");
let links = document.querySelector(".links");
hamburgerMenu.addEventListener("click", ()=>{
    links.classList.toggle("active");
})
close.addEventListener("click", ()=>{
    links.classList.toggle("active")
})