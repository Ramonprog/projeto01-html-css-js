function toggleNav() {
    let ul = document.getElementById("nav-ul");
    let hamburger = document.getElementById("menu-hamburger");
    let userArea = document.getElementById("user-area");

    if (window.innerWidth < 768) {
        ul.style.display = "none";
        hamburger.style.display = "block";
        userArea.style.display = "none";
    } else {
        ul.style.display = "flex";
        hamburger.style.display = "none";
        userArea.style.display = "flex";
    }
}

toggleNav();

window.addEventListener("resize", toggleNav);