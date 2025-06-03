$(document).ready(function () {
  $(".card-grid").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            centerMode: false,

        }
      },

      {
        breakpoint: 822,
        settings: {
            slidesToShow: 1,
            centerMode: false,

        }
      },
      {
        breakpoint: 482,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        }
      }
    ]
  });
});
