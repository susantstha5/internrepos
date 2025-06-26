
function logSectionHeight() {
  const navbar = document.querySelector("#navBar");
  const heroContainer = document.querySelector(".hero_container");
  if (navbar) {
    // console.log('offsetHeight:', navbar.offsetHeight);
    heroContainer.style.paddingTop = `${navbar.offsetHeight}px`;
  }
}

window.addEventListener("load", logSectionHeight); // on page load
window.addEventListener("resize", logSectionHeight); // when resized
