$(document).ready(function () {
  // Load the content of each section
  $("#home").load("home.html");
  setTimeout(function () {
    // $("#line-ups").load("page.html");
  }, 500);

  $("#info").load("section.html");
});

$(document).ready(function () {
  // Reveal sections on scroll
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    // Calculate the threshold for revealing a section
    var threshold = windowHeight * 0.8;

    // Check if each section is in the viewport and reveal it
    $(".content").each(function () {
      var offsetTop = $(this).offset().top;

      if (scrollTop + windowHeight > offsetTop + threshold) {
        $(this).addClass("revealed");
      }
    });
  });
});

//   // Add event listeners
//   document.addEventListener('scroll', handleScroll);
//   var navLinks = document.querySelectorAll('nav a');
//   navLinks.forEach(function(link) {
//     link.addEventListener('click', handleNavClick);
//   });
