$(document).ready(function () {
  const $container = $("#scrollContainer");
  const $scrollRightBtn = $("#scrollRight");
  const $scrollLeftBtn = $("#scrollLeft");
  const $scrollAmount = 220;

  if ($container.length && $scrollRightBtn.length) {
    $scrollRightBtn.on("click",function () {
      $container.animate({ scrollLeft: "+=" + $scrollAmount }, 300); //300 is animation speed
    });
    $container.on("wheel", function (e) {
      e.preventDefault();
      console.log("Event",e);
      this.scrollLeft += e.originalEvent.deltaY; //originalEvent is used to access raw event in jquery.
      this.scrollBehaviour = "auto";
    });
    if ($scrollLeftBtn.length) {
      $scrollLeftBtn.on("click",function () {
        $container.animate({ scrollLeft: "-=" + $scrollAmount }, 300);
      });
    }
  }
  // testimonial
  const clientReviews = {
    client1: {
      review:
        "“If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.”",
      rating: 5.0,
    },
    client2: {
      review:
        "“Working with Priya was a game-changer for our product. She has a rare ability to see design from both a user's and a business's perspective. If you're after clean, user-first experiences with strategic thinking behind every pixel — she's the one.”",
      rating: 4.7,
    },
    client3: {
      review:
        "“Ravi doesn’t just design interfaces — he solves real problems. He asks the hard questions, uncovers hidden friction points, and turns complexity into clarity. His passion for user experience is contagious and pushes the whole team to do better.”",
      rating: 4.1,
    },
    client4: {
      review:
        "“When it comes to crafting intuitive, thoughtful user journeys, Sarah has an instinct you can't teach. She’s not afraid to challenge assumptions and always backs her ideas with insight. Every product is better after she's touched it.”",
      rating: 4.6,
    },
  };
  const $clients = $(".client");
  const $reviewBox = $("#testimonial_review");
  const $rating = $("#rate");
  $clients.click(function () {
    $clients.removeClass("active");

    const $clientID = $(this).data("id");
    const $reviews = clientReviews[$clientID].review;
    const $rate = clientReviews[$clientID].rating;

    $reviewBox.html($reviews);
    $rating.html($rate);
    $(this).addClass("active");
  });
  $(window).on("load", function () {
    $clients[0].click();
  });
});

