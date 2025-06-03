$(document).ready(function(){
   $('.slider').slick({
      dots: true,
      arrows: true,
      infinite:false,
      speed: 300,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      responsive: [
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 430,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   });
 });