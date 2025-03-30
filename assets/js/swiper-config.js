var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 90,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    cssMode: true,
    breakpoints: {
        1024: { slidesPerView: 5 },
        768: { slidesPerView: 4 },
        480: { slidesPerView: 3 }
    },
    renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
});
