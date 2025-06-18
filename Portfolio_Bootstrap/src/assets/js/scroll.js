document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollRight");
  const scrollContainer = document.getElementById("logoScroll");

  if (scrollBtn && scrollContainer) {
    scrollBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
    });
  }
});