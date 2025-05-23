function toggleNav() {
    let ul = document.getElementById("nav-ul");
    let hamburger = document.getElementById("menu-hamburger");
    let userArea = document.getElementById("user-area");
    let secondCard = document.getElementById("cart-second-section");
    let footerInfos = document.getElementById("footer-infos");
    let fakeCollapse = document.getElementById("fake-collapse");
    let footerTextDesk = document.getElementById("footer-text-desk");
    let footerTextMobile = document.getElementById("footer-text-mobile");

    if (window.innerWidth < 768) {
        ul.style.display = "none";
        hamburger.style.display = "block";
        userArea.style.display = "none";
        secondCard.style.display = "none";
        footerInfos.style.display = "none";
        fakeCollapse.style.display = "block";
        footerTextDesk.style.display = "none";
        footerTextMobile.style.display = "block";
    } else {
        ul.style.display = "flex";
        hamburger.style.display = "none";
        userArea.style.display = "flex";
        secondCard.style.display = "block";
        footerInfos.style.display = "flex";
        fakeCollapse.style.display = "none";
        footerTextDesk.style.display = "block";
        footerTextMobile.style.display = "none";
    }
}

toggleNav();

window.addEventListener("resize", toggleNav);