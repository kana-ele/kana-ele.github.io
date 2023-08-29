const fadeAnime = () => {
  const offset = 100;

  $(".fadeUpTrigger").each(function () {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop >= elemPos + offset) {
      $(this).addClass("fadeUp");
    }
  });

  $(".fadeLeftTrigger").each(function () {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop >= elemPos + offset) {
      $(this).addClass("fadeLeft");
    }
  });
};

$(window).scroll(fadeAnime); // call on scroll
$(window).on("load", fadeAnime); // call on load
