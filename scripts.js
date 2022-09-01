console.log("It is working");

const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", ()  => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click",  () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))