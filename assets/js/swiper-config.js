var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: { slidesPerView: 5, spaceBetween: 90 },
        768: { slidesPerView: 4, spaceBetween: 60 },
        520: { slidesPerView: 3, spaceBetween: 30 },
        380: { slidesPerView: 1, spaceBetween: 10 },
    }
});
