const hamburger = document.querySelector("button.hamburger");
const navMenu = document.querySelector("ul.nav-links");

hamburger.addEventListener("click", () =>{
    navMenu.classList.toggle("show");
}
);

