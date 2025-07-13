
var swiper = new Swiper(".bucket_new", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        400: {
            slidesPerView: 1.3
            ,
            spaceBetween: 10,
        },

        500: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },

        600: {
            slidesPerView: 1.7,
            spaceBetween: 20,
        },

        800: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        900: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 2.4,
            spaceBetween: 10,
        },

        1100: {
            slidesPerView: 2.7,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        1350: {
            slidesPerView: 3.1,
            spaceBetween: 10,
        },
        1500: {
            slidesPerView: 3.4,
            spaceBetween: 10,
        },

        1600: {
            slidesPerView: 3.8,
            spaceBetween: 20,
        },
        1700: {
            slidesPerView: 4.3,
            spaceBetween: 30,
        },
    },
});
