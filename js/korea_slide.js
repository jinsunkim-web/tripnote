var swiper = new Swiper(".korea_text", {
    loop: true,
    effect: 'fade',
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".korea_photo", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
