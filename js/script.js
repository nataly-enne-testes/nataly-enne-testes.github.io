$(document).ready(function() {
  $(".nav-components").click(function(event) {
    $("html, body").animate(
      { scrollTop: $(this.hash).offset().top - 190 },
      800
    );
  });
  $(".logo-exception-scroll").click(function(event) {
    $("html, body").animate(
      { scrollTop: $(this.hash).offset().top - 500},
      800
    );
  });
  $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
});

