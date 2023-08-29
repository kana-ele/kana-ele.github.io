const fadeAnime = () => {
  const offset = 100;
  const windowHeight = $(window).height();
  const scrollTop = $(window).scrollTop();

  $(".fadeUpTrigger").each(function () {
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop > elemPos + offset) {
      $(this).addClass("fadeUp");
    } else if (windowHeight + scrollTop < elemPos - offset) {
      $(this).removeClass("fadeUp");
    }
  });

  $(".fadeLeftTrigger").each(function () {
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop > elemPos + offset) {
      $(this).addClass("fadeLeft");
    } else if (windowHeight + scrollTop < elemPos - offset) {
      $(this).removeClass("fadeLeft");
    }
  });
};

$(window).scroll(fadeAnime); // call on scroll
$(window).on("load", fadeAnime); // call on load
