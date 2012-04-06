$(document).ready(function() {
  // Accordion effect
  $("aside#sidebar > ul > li > a").click(function() {
    $(this).siblings().slideToggle();
    $(this).parent().siblings().children("ul").slideUp();
  });

  // Debug! disable all links and buttons.
  // Remove in production!
  $("a, input[type=\"submit\"]").click(function() {
    return false;
  })
});
