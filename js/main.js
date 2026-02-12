addEventListener("scroll", (event) => {
  currentScroll = $(window).scrollTop();

  if (currentScroll > 0) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

addEventListener("load", (event) => {
  if ($(".twentytwenty-block").length > 0) {
    $(".twentytwenty-block").twentytwenty({
      default_offset_pct: 0.5, // How much of the before image is visible when the page loads
      orientation: "horizontal", // Orientation of the before and after images ('horizontal' or 'vertical')
      no_overlay: true, //Do not show the overlay with before and after
      move_slider_on_hover: false, // Move slider on mouse hover?
      move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
      click_to_move: false, // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });

    $(".twentytwenty-block").addClass("load");
  }
});

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
        body.addClass("hidden");
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
      body.removeClass("hidden");
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

  if ($(".paws").length > 0) {
    let paws = $(".paws .paw");
    let currentIndex = 0;

    setInterval(function () {
      paws.eq(currentIndex).addClass("active");
      currentIndex = currentIndex + 1;

      if (currentIndex > paws.length) {
        paws.removeClass("active");
        currentIndex = 0;
      }
    }, 500);
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
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

  if ($("[data-btn-disabled]").length > 0) {
    $("[data-btn-disabled]").on("click", function () {
      const formBlock = $(this).parents("form");
      const btn = formBlock.find("[data-for-disabled]");
      const isDisabled = btn.prop("disabled");

      btn.prop("disabled", !isDisabled);
    });
  }

  if ($(".catalog-filter-row__head").length > 0) {
    $(".catalog-filter-row__head").on("click", function () {
      const self = $(this);
      const isOpened = self.hasClass("opened");

      $(".catalog-filter-row__head")
        .removeClass("opened")
        .next()
        .stop()
        .slideUp();

      if (!isOpened) {
        self.addClass("opened").next().stop().slideDown();
      }
    });
  }

  if ($(".product-info-rows__head").length > 0) {
    $(".product-info-rows__head").on("click", function () {
      const self = $(this);
      const isOpened = self.hasClass("opened");

      $(".product-info-rows__head")
        .removeClass("opened")
        .next()
        .stop()
        .slideUp();

      if (!isOpened) {
        self.addClass("opened").next().stop().slideDown();
      }
    });
  }

  if ($(".btn-filter").length > 0) {
    let filter = $(".catalog-filter");
    let close = $(".filter__close");
    let body = $("body");
    let overlay = $(".overlay");

    $(".btn-filter").on("click", function () {
      filter.toggleClass("opened");
      body.toggleClass("hidden");
      overlay.toggleClass("visible");
    });

    close.on("click", function () {
      filter.removeClass("opened");
      body.removeClass("hidden");
      overlay.removeClass("visible");
    });

    overlay.on("click", function () {
      filter.removeClass("opened");
      body.removeClass("hidden");
      overlay.removeClass("visible");
    });
  }

  if ($(".history-company__left").length > 0) {
    $(".history-company__left li").on("click", function () {
      let self = $(this);
      let attr = `tb${self.attr("data-id")}`;

      $(".history-company__left li").removeClass("active");
      self.addClass("active");

      $(".history-company .tab-content").removeClass("opened");
      $(".history-company").find(`#${attr}`).addClass("opened");
    });
  }

  if ($(".your-brand").length > 0) {
    $(".your-brand__left li").on("click", function () {
      let self = $(this);
      let attr = `tab${self.attr("data-id")}`;

      $(".your-brand__left li").removeClass("active");
      self.addClass("active");

      $(".your-brand__content").removeClass("opened");
      $(`#${attr}`).addClass("opened");
    });
  }

  if ($(".toh-section").length > 0) {
    $(".toh-circle").on("click", function () {
      let self = $(this);
      let parents = self.parents(".toh-section");

      parents.find(".toh-circle").removeClass("active");
      parents.find(".toh-content").removeClass("opened");

      self.addClass("active");
      self.next(".toh-content").addClass("opened");
    });

    $(".toh-close").on("click", function () {
      let self = $(this);
      let parents = self.parents(".toh-section");

      parents.find(".toh-circle").removeClass("active");
      parents.find(".toh-content").removeClass("opened");
    });
  }

  if ($(".brand-faq__list").length > 0) {
    $(".brand-faq__item").on("click", function () {
      let self = $(this);
      let parents = $(this).parents(".brand-faq__list");

      let isOpened = self.hasClass("opened");

      parents
        .find(".brand-faq__item")
        .removeClass("opened")
        .find(".brand-faq__content")
        .stop()
        .slideUp();

      if (!isOpened) {
        self.addClass("opened").find(".brand-faq__content").stop().slideDown();
      }
    });
  }

  // sliders
  if ($(".grettingsSlider").length > 0) {
    let delaySwiper = 6000; // время переключения слайдов

    const swiper = new Swiper(".grettingsSlider", {
      slidesPerView: 1,
      spaceBetween: 12,
      effect: "fade",
      fadeEffect: { crossFade: true },
      loop: true,
      autoplay: {
        delay: delaySwiper,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".grettingsSlider .swiperBtnPrev",
        nextEl: ".grettingsSlider .swiperBtnNext",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        init: function () {
          const firstSwiperBullet = $(
            ".grettingsSlider .swiper-pagination-bullet",
          ).eq(0);

          firstSwiperBullet.removeClass("swiper-pagination-bullet-active");

          setTimeout(function () {
            firstSwiperBullet.addClass("swiper-pagination-bullet-init");
          }, 300);

          setTimeout(function () {
            firstSwiperBullet.removeClass("swiper-pagination-bullet-init");
          }, delaySwiper);
        },
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

  if ($(".teams-slider").length > 0) {
    const swiper = new Swiper(".teams-slider", {
      slidesPerView: 3,
      spaceBetween: 25,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        prevEl: ".teams-slider .swiperBtnPrev",
        nextEl: ".teams-slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.35,
          spaceBetween: 18,
        },
        390: {
          slidesPerView: 1.65,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  }

  if ($(".news-slider").length > 0) {
    const swiper = new Swiper(".news-slider", {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        prevEl: ".news-slider .swiperBtnPrev",
        nextEl: ".news-slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.15,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 22,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
      },
    });
  }

  if ($(".sertificateSlider").length > 0) {
    const swiper = new Swiper(".sertificateSlider", {
      slidesPerView: 2,
      spaceBetween: 24,
      navigation: {
        prevEl: ".sertificateSlider .swiperBtnPrev",
        nextEl: ".sertificateSlider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 2.15,
          spaceBetween: 5,
        },
        390: {
          slidesPerView: 2.25,
          spaceBetween: 7,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  }

  if ($(".sliderReviews").length > 0) {
    const swiper = new Swiper(".sliderReviews", {
      slidesPerView: 2,
      spaceBetween: 24,
      navigation: {
        prevEl: ".sliderReviews .swiperBtnPrev",
        nextEl: ".sliderReviews .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.05,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 1.35,
          spaceBetween: 26,
        },
        1200: {
          slidesPerView: 1.65,
          spaceBetween: 26,
        },
        1550: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
  }

  if ($(".sliderMade").length > 0) {
    const swiper = new Swiper(".sliderMade", {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 1000,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.4,
          spaceBetween: 5,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 17,
          slidesPerGroup: 2,
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  }

  if ($(".product-info__big").length > 0) {
    const slideElements = document.querySelectorAll(
      ".product-info__small .swiper-slide",
    );

    const slideCount = slideElements.length;

    switch (slideCount) {
      case 1:
        $(".product-info__small").addClass("hidden");
        break;
      case 2:
      case 3:
        $(".product-info__small").addClass("smallSlide");
        break;
      default:
        break;
    }

    const sliderSmall = new Swiper(".product-info__small", {
      slidesPerView: 4,
      spaceBetween: 10,
      watchSlidesProgress: true,
      on: {
        init: function () {
          if (!$(".product-info__small").hasClass("hidden")) {
            $(".product-info__small").addClass("visible");
          }
        },
      },
    });

    const sliderBig = new Swiper(".product-info__big", {
      spaceBetween: 10,
      thumbs: {
        swiper: sliderSmall,
      },
      navigation: {
        prevEl: ".product-info__big .swiperBtnPrev",
        nextEl: ".product-info__big .swiperBtnNext",
      },
    });
  }

  if ($(".section-other__slider").length > 0) {
    const swiper = new Swiper(".section-other__slider", {
      slidesPerView: 4,
      spaceBetween: 24,
      navigation: {
        prevEl: ".section-other__slider .swiperBtnPrev",
        nextEl: ".section-other__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        390: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 17,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
  }

  if ($(".article-slider__slider").length > 0) {
    const sliders = document.querySelectorAll(".article-slider__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 26,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 26,
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

  if ($(".article-slider__slider--v2").length > 0) {
    const sliders = document.querySelectorAll(".article-slider__slider--v2");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 32,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 32,
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

  if ($(".about-production__slider").length > 0) {
    const swiper = new Swiper(".about-production__slider", {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        prevEl: ".about-production__slider .swiperBtnPrev",
        nextEl: ".about-production__slider .swiperBtnNext",
      },
    });
  }

  if ($(".geography__toh").length > 0) {
    const items = $(".geography__toh");
    let activeClass = "active";
    let interval = 3000;

    setInterval(function () {
      items.removeClass(activeClass);

      let randomIndex = Math.floor(Math.random() * items.length);

      items.eq(randomIndex).addClass(activeClass);
    }, interval);
  }

  // /sliders

  if ($(".selectric").length > 0) {
    $(".selectric").map(function () {
      $(this).selectric({
        // onOpen: function (element) {},
        // onChange: function (element) {},
        // onClose: function (element) {},
      });
    });
  }

  if ($(".btn-up").length > 0) {
    $(window).on("scroll", function () {
      let footer = $(".footer");
      let button = $(".btn-up");
      let footerOffset = footer.offset().top;
      let windowHeight = $(window).height();
      let scrollPosition = $(window).scrollTop() + windowHeight;

      if ($(window).scrollTop() > 500 && scrollPosition < footerOffset) {
        button.addClass("visible");
      } else {
        button.removeClass("visible");
      }
    });

    $(".btn-up").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  }

  if ($(".search-block").length > 0) {
    const btn = $(".search-block .search-block__icon");
    const parents = btn.parents(".search-block");
    const input = parents.find("input");
    const btnClearInput = parents.find(".btn-clear-search");

    btn.on("click", () => {
      parents.toggleClass("opened");
      input.focus();
    });

    btnClearInput.on("click", () => {
      parents.removeClass("opened");
      input.val("");
    });

    $(document).mouseup(function (e) {
      if (!parents.is(e.target) && parents.has(e.target).length === 0) {
        parents.removeClass("opened");
        input.val("");
      }
    });
  }

  if ($(".flavor-options").length > 0) {
    const list = $(".flavor-options");
    const items = list.find("li");
    const maxVisible = 7;

    if (items.length > maxVisible) {
      items.slice(3).hide();

      const toggleItem = $("<li class='flavor-options__more'></li>");
      list.append(toggleItem);

      toggleItem.on("click", function () {
        const hiddenItems = items.slice(3);
        const isHidden = hiddenItems.first().is(":hidden");

        if (isHidden) {
          hiddenItems.show();
          toggleItem.removeClass("hide").addClass("show").text("Скрыть");
        } else {
          console.log("hide");
          hiddenItems.hide();
          toggleItem.removeClass("show").addClass("hide").text("");
        }
      });
    }

    setTimeout(function () {
      $(".flavor-options").addClass("load");
    }, 300);
  }

  if ($(".gallery-main").length > 0) {
    let interval = null;

    if ($(window).width() > 767) {
      clearInterval(interval);

      $(".gallery-main__left").hover(
        function () {
          $(".gallery-main__right").removeClass("hover").addClass("hovering");
          $(".gallery-main__left").addClass("hover");
        },
        function () {
          $(".gallery-main__right").removeClass("hovering");
          $(".gallery-main__left").removeClass("hover");
        },
      );

      $(".gallery-main__right").hover(
        function () {
          $(".gallery-main__left").removeClass("hover").addClass("hovering");
          $(".gallery-main__right").addClass("hover");
        },
        function () {
          $(".gallery-main__left").removeClass("hovering");
          $(".gallery-main__right").removeClass("hover");
        },
      );
    } else {
      let leftBlock = $(".gallery-main__left");
      let rightBlock = $(".gallery-main__right");
      let isLeftVisible = true;

      function toggleBlocks() {
        if (isLeftVisible) {
          leftBlock.addClass("visible");
          rightBlock.removeClass("visible");
        } else {
          rightBlock.addClass("visible");
          leftBlock.removeClass("visible");
        }

        isLeftVisible = !isLeftVisible;
      }

      toggleBlocks();
      interval = setInterval(toggleBlocks, 5000);
    }
  }

  // base

  // if ($(".faq-list").length > 0) {
  //   $(".faq-section__quest").on("click", function () {
  //     if ($(this).hasClass("active")) {
  //       $(this).removeClass("active");
  //       $(this).parents(".faq-item").removeClass("opened");
  //       $(this).next(".faq-section__answer").stop().slideUp();
  //     } else {
  //       $(".faq-item").removeClass("opened");
  //       $(".faq-section__quest").removeClass("active");
  //       $(".faq-section__answer").stop().slideUp();

  //       $(this).parents(".faq-item").addClass("opened");
  //       $(this).addClass("active");
  //       $(this).next(".faq-section__answer").stop().slideDown();
  //     }
  //   });
  // }

  // if ($(".subcategories-slider").length > 0) {
  //   const sliders = document.querySelectorAll(".subcategories-slider");
  //   let mySwipers = [];

  //   function sliderinit() {
  //     sliders.forEach((slider, index) => {
  //       let navNext = undefined;
  //       let navPrev = undefined;

  //       if (!slider.swiper) {
  //         navNext = $(slider)
  //           .parents(".subcategories")
  //           .find(".btnSwiperNext")[0];
  //         navPrev = $(slider)
  //           .parents(".subcategories")
  //           .find(".btnSwiperPrev")[0];

  //         mySwipers[index] = new Swiper(slider, {
  //           slidesPerView: 3,
  //           spaceBetween: 24,
  //           navigation: {
  //             nextEl: navNext && navNext,
  //             prevEl: navPrev && navPrev,
  //           },
  //           breakpoints: {
  //             0: {
  //               slidesPerView: 1,
  //               spaceBetween: 16,
  //             },
  //             640: {
  //               slidesPerView: 2,
  //               spaceBetween: 16,
  //             },
  //             1280: {
  //               slidesPerView: 3,
  //               spaceBetween: 24,
  //             },
  //           },
  //         });
  //       } else {
  //         return;
  //       }
  //     });
  //   }

  //   sliders.length && sliderinit();
  // }

  // if ($(".sort-block").length > 0) {
  //   $(".sort-block").on("click", function () {
  //     if ($(this).hasClass("opened")) {
  //       $(this)
  //         .removeClass("opened")
  //         .find(".sort-block__list")
  //         .stop()
  //         .slideUp();
  //     } else {
  //       let self = $(this);

  //       self.addClass("opened").find(".sort-block__list").stop().slideDown();

  //       $(document).mouseup(function (e) {
  //         if (!self.is(e.target) && self.has(e.target).length === 0) {
  //           self
  //             .removeClass("opened")
  //             .find(".sort-block__list")
  //             .stop()
  //             .slideUp();
  //         }
  //       });
  //     }
  //   });
  // }

  // if ($(".tabs").length > 0) {
  //   $(".tabs").tabslet({
  //     mouseevent: "click",
  //     attribute: "href",
  //     animation: true,
  //   });
  // }

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

// cookies
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  let cookieArr = document.cookie.split("; ");
  for (let cookie of cookieArr) {
    let [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) return cookieValue;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  let notificationBlock = document.getElementById("notification-cookie");
  let closeBtn = document.getElementById("notification-cookie__btn");

  if (getCookie("notificationGURMAN")) {
    notificationBlock.style.display = "none";
  } else {
    notificationBlock.style.display = "flex";
  }

  closeBtn.addEventListener("click", function () {
    notificationBlock.style.display = "none";
    setCookie("notificationGURMAN", "true", 30); // Запоминаем на 30 дней
  });
});
