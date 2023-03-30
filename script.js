document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-menu-container").classList.add("block");
});

document.querySelector(".menu-close-image").addEventListener("click", function() {
    document.querySelector(".nav-menu").style.display = "none";
});

let width = document.body.offsetWidth;

// console.log(width)

if (width > 650) {
    console.log("okay");
    document.querySelector(".nav-menu").style.display = "none";
}

