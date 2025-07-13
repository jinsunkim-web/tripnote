var swiper = new Swiper(".small-slide", {
    simulateTouch: false,/*터치 못하게 막음*/
    spaceBetween: 20,
    freeMode: false,
    watchSlidesProgress: false,
    speed: 1000,
    loop: true,
    slidesPerView: 1,
});
var swiper2 = new Swiper(".background_slide", {
    loop: true,
    speed: 800,
    simulateTouch: false,/*터치 못하게 막음*/
    spaceBetween: 0,

    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});
