$(document).ready(function () {
  if ($(".burger").length > 0) {
    let burger = $(".burger");
    let body = $("body");
    let menu = $(".menu-invis");
    let close = $(".menu-invis .close");
    let overlay = $(".overlay");

    burger.on("click", function () {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened");
        body.addClass("is-openMenu");
        overlay.addClass("visible");
      }
    });

    close.on("click", function () {
      closeMenu();
    });

    overlay.on("click", function () {
      closeMenu();
    });

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened");
      body.removeClass("is-openMenu");
      overlay.removeClass("visible");
    }
  }

  if ($(".search-block").length > 0) {
    const btn = $(".search-block .icon-search");
    const parents = btn.parents(".search-block");
    const input = parents.find("input");
    const btnClearInput = parents.find(".btn-clear-search");

    btn.on("click", () => {
      parents.toggleClass("opened");
      input.focus();
    });

    btnClearInput.on("click", () => {
      clearInput(input);
    });

    input.on("input", (event) => {
      $(event.target).val().length > 0
        ? btnClearInput.addClass("visible")
        : btnClearInput.removeClass("visible");
    });

    $(document).mouseup(function (e) {
      if (!parents.is(e.target) && parents.has(e.target).length === 0) {
        parents.removeClass("opened");
        input.val("");
        btnClearInput.removeClass("visible");
      }
    });
  }

  // sliders
  if ($(".grettingsSlider").length > 0) {
    const swiper = new Swiper(".grettingsSlider", {
      slidesPerView: 1,
      spaceBetween: 12,
      // effect: "fade",
      // fadeEffect: { crossFade: true },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".grettingsSlider .swiperBtnPrev",
        nextEl: ".grettingsSlider .swiperBtnNext",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });

    const current = document.querySelector(".fraction__current");
    const total = document.querySelector(".fraction__all");

    total.textContent = swiper.slides.length.toString().padStart(2, "0");

    const updateFraction = () => {
      const index = swiper.realIndex + 1;
      current.textContent = index.toString().padStart(2, "0");
    };

    updateFraction();

    swiper.on("slideChange", updateFraction);
  }

  // /sliders

  // base

  if ($(".faq-list").length > 0) {
    $(".faq-section__quest").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".faq-item").removeClass("opened");
        $(this).next(".faq-section__answer").stop().slideUp();
      } else {
        $(".faq-item").removeClass("opened");
        $(".faq-section__quest").removeClass("active");
        $(".faq-section__answer").stop().slideUp();

        $(this).parents(".faq-item").addClass("opened");
        $(this).addClass("active");
        $(this).next(".faq-section__answer").stop().slideDown();
      }
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".subcategories-slider").length > 0) {
    const sliders = document.querySelectorAll(".subcategories-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperNext")[0];
          navPrev = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".sort-block").length > 0) {
    $(".sort-block").on("click", function () {
      if ($(this).hasClass("opened")) {
        $(this)
          .removeClass("opened")
          .find(".sort-block__list")
          .stop()
          .slideUp();
      } else {
        let self = $(this);

        self.addClass("opened").find(".sort-block__list").stop().slideDown();

        $(document).mouseup(function (e) {
          if (!self.is(e.target) && self.has(e.target).length === 0) {
            self
              .removeClass("opened")
              .find(".sort-block__list")
              .stop()
              .slideUp();
          }
        });
      }
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($("[data-aos]").length > 0) {
    if ($(window).width() < 1280) {
      AOS.init({
        disable: true,
      });
    } else {
      AOS.init({
        once: true,
      });
    }
  }
  // /base
});
