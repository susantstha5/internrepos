window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("scrollContainer");
  const scrollBtn = document.getElementById("scrollRight");
  const scrollAmount = 220;
  if (container && scrollBtn) {
    // Right scroll button click handler
    scrollBtn.addEventListener("click", () => {
      console.log("Scroll button clicked");
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // wheel scroll handler
    container.addEventListener("wheel", (evt) => {
      console.log("Wheel event triggered");
      evt.preventDefault();
      container.scrollLeft += evt.deltaY;
      container.style.scrollBehavior = "auto";
    });

    // left scroll button click handler
    const scrollLeftBtn = document.getElementById("scrollLeft");
    if (scrollLeftBtn) {
      scrollLeftBtn.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
  } else {
    console.error("Scroll elements not found!");
  }
});



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
const clients = document.querySelectorAll(".client");
const reviewBox = document.getElementById("testimonial_review");
const rating = document.getElementById("rate");
clients.forEach((client) => {
  client.addEventListener("click", () => {
    clients.forEach((c) => c.classList.remove("active"));
    const clientID = client.getAttribute("data-id");
    const reviews = clientReviews[clientID].review;
    const rate = clientReviews[clientID].rating;
    console.log(rate, reviews);
    reviewBox.innerHTML = `${reviews}`;
    rating.innerHTML = `${rate}`;
    client.classList.add("active");
  });
});
window.addEventListener("DOMContentLoaded", () => {
  clients[0].click();
});
