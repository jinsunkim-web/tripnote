var swiper = new Swiper('.bucket_right', {
    slidesPerView: "auto",
    spaceBetween: 15,
    direction: getDirection(),
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}
