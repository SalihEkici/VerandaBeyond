$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  //===== Mobile Menu

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });

  //===== One Page Nav

  $("#nav").onePageNav({
    filter: ":not(.external)",
    currentClass: "active",
  });

  //=====  Slick

  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      fade: true,
      arrows: false,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  //=====  Slick product items active

  $(".product-items-active").slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni-chevron-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni-chevron-right"></i></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  //=====  Slick Showcase active

  $(".showcase-active").slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  //=====  Slick testimonial active

  $(".testimonial-active").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });

  //====== Magnific Popup

  $(".Video-popup").magnificPopup({
    type: "iframe",
    // other options
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //====== Slick product image

  $(".product-image").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni-chevron-left"></i></span>',
    nextArrow:
      '<span class="next"><i class="lni-chevron-right"></i></i></span>',
    dots: false,
  });

  //====== Nice Number

  $('input[type="number"]').niceNumber({});

  //=====  Rating selection

  var $star_rating = $(".star-rating .fa");

  var SetRatingStar = function () {
    return $star_rating.each(function () {
      if (
        parseInt($star_rating.siblings("input.rating-value").val()) >=
        parseInt($(this).data("rating"))
      ) {
        return $(this).removeClass("fa-star-o").addClass("fa-star");
      } else {
        return $(this).removeClass("fa-star").addClass("fa-star-o");
      }
    });
  };

  $star_rating.on("click", function () {
    $star_rating.siblings("input.rating-value").val($(this).data("rating"));
    return SetRatingStar();
  });

  SetRatingStar();
});

//===== Product info
const info = document.getElementById("big-image");

//veranda buttons
const verandaGlassTop = document.getElementById("verandaGlassTop");
const verandaPolyTop = document.getElementById("verandaPolyTop");
const verandaAluminumSideWall = document.getElementById(
  "verandaAluminumSideWall"
);
const verandaPolySideWall = document.getElementById("verandaPolySideWall");

//===== carport buttons
const carportPolyTop = document.getElementById("carportPolyTop");
const carportGlassTop = document.getElementById("carportGlassTop");
const carportWall = document.getElementById("carportWall");

//===== glass system buttons
const tintedGlass = document.getElementById("tintedGlass");
const sideGlassSystem = document.getElementById("sideGlassSystem");
const glassSystemPhoto = document.getElementById("glassSystemPhoto");

//===== veranda info
verandaGlassTop.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-roof.jpg" alt="glass roof">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto">
      <p class="mx-auto mb-20 text-center">
        Do you always want a perfect incidence of light? <br>
        And can you also enjoy the starry sky and passing clouds? <br>
        Then a glass veranda is the best choice for you.
      </p>
      <ul class="mt-20 mb-auto mt-auto text-center">
        Veranda Glass Top:
          <li>- 10 year Guarantee</li>
          <li>- Spot LEDs can be added</li>
          <li>- Three color options (Antraciet, Black, Cream)</li>
          <li>- Laminated glass</li>
          <li>- Maximum 400 cm in length</li>
          <li>- A round or classic decorative gutter as standard</li>
      </ul>
    </div>
    `;
});

verandaPolyTop.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/poly-roof.jpg" alt="polycarbonate roof">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto">
    <p class="mb-20 text-center">
        Polycarbonate sheet is a very good product <br>
        to achieve a high-quality roof finish for your veranda. <br>
        It is also possible to make a wedge or a side wall <br>
        of your awning from these polycarbonate sheets.
    </p>
    <ul class="mt-20 mb-auto mt-auto text-center">
    Veranda Polycarbonate Top:
      <li>- 10 year Guarantee</li>
      <li>- Spot LEDs can be added</li>
      <li>- Three color options (Antraciet, Black, Creame)</li>
      <li>- A round or classic decorative gutter as standard</li>
      <li>- Clear or opaque options for sunlight</li>
    </ul>
  </div>
    `;
});

verandaAluminumSideWall.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/sidewall.jpg" alt="aluminum side wall">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
  <p class="mb-20">
  You can choose to close the walls of your veranda. <br> 
  View the many possibilities with us. <br>
  The aluminum walls are maintenance-free <br>
  and available in various colours.
  </p>
  <ul>
  Veranda Aluminum Side Wall:
    <li>- Durable and maintenance-friendly side walls for your veranda</li>
    <li>- Powder-coated aluminum in 2 standard colors</li>
    <li>- Can be combined with a wedge frame for more light</li>
    <li>- Thickness panels 16 MM & Height panels 160 MM</li>
    <li>-  Close a roof up to a height of 190cm</li>
  </ul>
  </div>
  `;
});

verandaPolySideWall.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/poly-sidewall.jpg" alt="polycarbonate side wall">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
    <p class="mb-20">Do you always want perfect light in your veranda? <br> 
    With the polycarbonate side wall, <br> 
    you are sheltered without losing daylight.</p>
    <ul >
    Veranda Polycarbonate Side Wall:
      <li>- 16mm polycarbonate</li>
      <li>- Choices of opaque(reduces sunlight by 80%) and clear</li>
      <li>- Available in different sizes</li>
    </ul>
  </div>
  `;
});

//===== carport info

carportGlassTop.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" id="carportGlassTop" src="assets/images/product/glass-roof.jpg" alt="Glass Top Carport">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
    <p class="mb-20">Would you rather have a glass carport? <br>
     That is also possible at Veranda&Beyonde.</p>
    <ul >
    Carport Glass Top:
      <li>- Two color options (Antraciet and Creame)</li>
      <li>- Laminated glass</li>
      <li>- Maximum 400 cm in length</li>
      <li>- LEDs can be added</li>
      <li>- Standard or round gutter options</li>
    </ul>
  </div>
  `;
});

carportPolyTop.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" id="carpotPolyTop" src="assets/images/product/carport-poly-roof.jpg" alt="Polycarbonate Top Carport">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
    <p class="mb-20">
    An aluminum car cover is a beautiful <br>
    covering with a very long lifespan, <br>
     which also requires little maintenance. <br>
      In addition, an aluminum cover <br>
       from Veranda&Beyonde also <br>
       offers a beautiful view.</p>
    <ul>
    Carport Polycarbonate Top:
      <li>- Three color options (Antraciet, Black and Creame)</li>
      <li>- Choices of opaque(reduces sunlight by 80%) and clear</li>
      <li>- Maximum 400 cm in length</li>
      <li>- LEDs can be added</li>
      <li>- Standard or round gutter options</li>
      <li>- 10 year guarantee for profiles and color of polycarbonate</li>
    </ul>
  </div>
  `;
});

carportWall.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" id="carportWall" src="assets/images/product/carport-wall.jpg" alt="Carport wall">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
    <p class="mb-20">Do you always want perfect light in your veranda? <br> 
    With the polycarbonate side wall, <br> 
    you are sheltered without losing daylight.</p>
    <ul >
    Carport Wall:
      <li>- Three color options (Antraciet, Black and Creame)</li>
      <li>- Choices of opaque(reduces sunlight by 80%) and clear</li>
      <li>- Maximum 400 cm in length</li>
      <li>- LEDs can be added</li>
      <li>- Standard or round gutter options</li>
      <li>- 10 year guarantee for profiles and color of polycarbonate</li>
    </ul>
  </div>
  `;
});

glassSystemPhoto.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-system.jpg" alt="Glass System">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
      <p class="mb-20">Do you always want perfect light in your veranda? <br> 
      With the polycarbonate side wall, <br> 
      you are sheltered without losing daylight.</p>
      <ul >
      Glass Systems:
        <li>- 10mm tempered glass</li>
        <li>- Extremely strong aluminum profiles</li>
        <li>- Wind and dust stopping draft strips</li>
      </ul>
    </div>
  `;
});

tintedGlass.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-system-dark.jpg" alt="Dark Glasses">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
      <p class="mb-20">Do you want to sit outside while still <br>
      having some privacy? Our tinted glass systems, <br> 
      With the polycarbonate side wall, <br> 
      is the perfect combination.</p>
      <ul >
      Glass Systems:
        <li>- 10mm tempered glass</li>
        <li>- Extremely strong aluminum profiles</li>
        <li>- Wind and dust stopping draft strips</li>
        <li>- Tinted glass panels to keep privacy and stop sunlight</li>
      </ul>
    </div>
  `;
});

sideGlassSystem.addEventListener("click", () => {
  info.innerHTML = `
  <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-system-side.jpg" alt="Side Glass System">
  <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
      <p class="mb-20">Do you always want perfect light in your veranda? <br> 
      With the polycarbonate side wall, <br> 
      you are sheltered without losing daylight.</p>
      <ul >
      Glass Systems:
        <li>- 10mm tempered glass</li>
        <li>- Extremely strong aluminum profiles</li>
        <li>- Wind and dust stopping draft strips</li>
      </ul>
    </div>
  `;
});
