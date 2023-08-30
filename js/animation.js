const fadeAnime = () => {
  const offset = 50;
  const windowHeight = $(window).height();
  const scrollTop = $(window).scrollTop();

  $(".fade-in-trigger").each(function () {
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop > elemPos + offset) {
      $(this).addClass("fade-in");
    } else if (windowHeight + scrollTop < elemPos - offset) {
      $(this).removeClass("fade-in");
    }
  });

  $(".fade-up-trigger").each(function () {
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop > elemPos + offset) {
      $(this).addClass("fade-up");
    } else if (windowHeight + scrollTop < elemPos - offset) {
      $(this).removeClass("fade-up");
    }
  });

  $(".fade-left-trigger").each(function () {
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop > elemPos + offset) {
      $(this).addClass("fade-left");
    } else if (windowHeight + scrollTop < elemPos - offset) {
      $(this).removeClass("fade-left");
    }
  });

  $(".fade-right-trigger").each(function () {
    const elemPos = $(this).offset().top;
    if (windowHeight + scrollTop > elemPos + offset) {
      $(this).addClass("fade-right");
    } else if (windowHeight + scrollTop < elemPos - offset) {
      $(this).removeClass("fade-right");
    }
  });
};

$(window).scroll(fadeAnime); // call on scroll
$(window).on("load", fadeAnime); // call on load
