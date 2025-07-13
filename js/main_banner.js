var swiper = new Swiper(".main", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
    effect: "fade",
    speed: 2000,
    loop: true,
    pagination: {
        /*el: ".swiper-pagination",*/
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


