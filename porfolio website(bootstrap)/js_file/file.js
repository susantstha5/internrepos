
// Aos implementation
AOS.init(
    {once:false}
 );

 //slider implementation
 
 $(document).ready(function(){
   $('.scroll_container').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
       infinite: true,
        
        slidesToShow: 3,
       slidesToScroll: 1,
        
   });
 });

 //testomonial js implementation
 const testimonials = {
    client1: {
      text: `“If you're looking for someone who will challenge your UX/UI
              thinking and really cut to the core of what's important for users,
              then Jesse is your man. On top of that, he brings a level of
              enthusiasm to the craft that's energizing for everyone who works
              with him.”`,
      rating: "5.0",
    },
    client2: {
      text: `“Albert design-oriented approach ensures creativity and innovation flow through every decision. A truly collaborative experience.”`,
      rating: "4.8",
    },
    client3: {
      text: `“Albert eye for detail and focus on intuitive user journeys helped us drastically improve our design systems.”`,
      rating: "4.9",
    },
    client4: {
      text: `“Working with albert was a masterclass in product leadership. His user-first mindset shaped a delightful experience.”`,
      rating: "5.0",
    },
  };

  const clients = document.querySelectorAll(".client");
  const testimonialReview = document.getElementById("testimonial_review");
  const rate = document.getElementById("rate");

  clients.forEach((client) => {
    client.addEventListener("click", () => {
      const clientId = client.getAttribute("data-id");
      const data = testimonials[clientId];
      if (data) {
        testimonialReview.textContent = data.text;
        rate.textContent = data.rating;
      }
    });
  });
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('[data-id="client1"]').click();
    });