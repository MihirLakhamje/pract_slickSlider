$(".sliding-container").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    prevArrow:`<button type='button' class='slick-prev pull-left'>Back<img class="back" src="img/icon/back.svg"> </button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'>Next<img class="front" src="img/icon/front.svg"></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
});
