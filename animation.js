const fadeAnime = () => {
  const offset = 100;
  const scrollBottom = $(window).scrollTop() + $(window).height();

  $(".fadeUpTrigger").each(function () {
    const elemPos = $(this).offset().top;
    if (scrollBottom >= elemPos + offset) {
      $(this).addClass("fadeUp");
    } else {
      $(this).removeClass("fadeUp");
    }
  });

  $(".fadeLeftTrigger").each(function () {
    const elemPos = $(this).offset().top;
    if (scrollBottom >= elemPos + offset) {
      $(this).addClass("fadeLeft");
    } else {
      $(this).removeClass("fadeLeft");
    }
  });
};

$(window).scroll(fadeAnime); // call on scroll
$(window).on("load", fadeAnime); // call on load
