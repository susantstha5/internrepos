const $fullHeight = $(document).height();
$(document).ready(function () {
  $("#scrollBtn").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(window).scrollTop() + $fullHeight,
      },
      1000
    );
  });
});
