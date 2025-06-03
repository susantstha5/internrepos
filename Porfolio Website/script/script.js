
 $(document).ready(function(){
   $('.project-container').slick({
      dots: false,
      arrows: true,
       infinite: false,
       speed: 300,
        slidesToShow: 2.5,
       slidesToScroll: 1,
       responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 350,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
   });
 });