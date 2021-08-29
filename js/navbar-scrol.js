  $(document).ready(function () {
      $('.active-navbar').click(function () {
        $('.active-navbar').removeClass("active-navbar");
        $(this).addClass("active-navbar");
      });
      $(window).scroll(function () {
        var lastScroll = 0,
          del = 4;
        var nowScroll = $(this).scrollTop();
        var x = document.getElementById("top-nav");
        if (Math.abs(lastScroll - nowScroll) >= del) {
          if (nowScroll > lastScroll) {
            x.style.background = "#3A3A3A";
          };
          lastScroll = nowScroll;
        } else {
          x.style.background = "transparent";
        };
      });
    });