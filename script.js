document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-menu-container").classList.add("block");
    this.classList.add("hidden")
});

document.querySelector(".menu-close-image").addEventListener("click", function() {
    document.querySelector(".nav-menu-container").classList.remove("block");
    document.querySelector(".hamburger").classList.remove("hidden");
});

setInterval(function() {
    let width = document.body.offsetWidth;
    if (width > 650 &&  document.querySelector(".nav-menu-container").classList.contains("block")) {
        console.log("okay");
        document.querySelector(".nav-menu-container").classList.remove("block");
        document.querySelector(".hamburger").classList.remove("hidden");
    };
}, 100)



