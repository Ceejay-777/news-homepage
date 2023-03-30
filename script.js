document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-menu").style.display = "flex";
});

document.querySelector(".menu-close-image").addEventListener("click", function() {
    document.querySelector(".nav-menu").style.display = "none";
});