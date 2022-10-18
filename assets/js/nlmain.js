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
//===== purchase specification selector

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
const products = document.querySelectorAll("product-pill");
const productsArray = [...products];

//===== veranda info
verandaGlassTop.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-roof.jpg" alt="glazen dak">
    <div>
      <p class="mb-20 text-center">
        Wilt u altijd een perfecte lichtinval? <br>
        En kun je ook genieten van de sterrenhemel en voorbijtrekkende wolken? <br>
        Dan is een glazen veranda de beste keuze voor jou.
      </p>
      <ul class="mt-20 mb-auto mt-auto text-center">
        Veranda glazen blad:
          <li>- 10 jaar garantie</li>
          <li>- Spot-LED's kunnen worden toegevoegd</li>
          <li>- Drie kleuropties (Antraciet, Zwart, Crème)</li>
          <li>- Gelaagd glas</li>
          <li>- Maximaal 400 cm lang</li>
          <li>- Standaard een ronde of klassieke decoratieve goot</li>
      </ul>
    </div>
    `;
});

verandaPolyTop.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/poly-roof.jpg" alt="polycarbonaat dak">
    <div>
      <p class="mb-20 text-center">
          Polycarbonaat plaat is een zeer goed product <br>
          om een ​​hoogwaardige dakafwerking van uw veranda te realiseren. <br>
          Het is ook mogelijk om een ​​wig of zijwand te maken <br>
          van uw voortent uit deze polycarbonaatplaten.
      </p>
      <ul class="mt-20 mb-auto mt-auto text-center">
      Veranda polycarbonaat blad:
        <li>- 10 jaar garantie</li>
        <li>- Spot-LED's kunnen worden toegevoegd</li>
        <li>- Drie kleuropties (Antraciet, Zwart, Crème)</li>
        <li>- Standaard een ronde of klassieke decoratieve goot</li>
        <li>- Heldere of ondoorzichtige opties voor zonlicht</li>
      </ul>
    </div>
      `;
});

verandaAluminumSideWall.addEventListener("click", () => {
  info.innerHTML = `
<img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/sidewall.jpg" alt="aluminium zijwand">
<div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
<p class="mb-20">
U kunt ervoor kiezen om de wanden van uw veranda te sluiten. <br>
Bekijk bij ons de vele mogelijkheden. <br>
De aluminium wanden zijn onderhoudsvrij <br>
en verkrijgbaar in verschillende kleuren.
</p>
<ul>
Veranda aluminium zijwand:
  <li>- Duurzame en onderhoudsvriendelijke zijwanden voor uw veranda</li>
  <li>- Gepoedercoat aluminium in 2 standaardkleuren</li>
  <li>- Kan worden gecombineerd met een wigvormig frame voor meer licht</li>
  <li>- Dikte panelen 16 MM & Hoogte panelen 160 MM</li>
  <li>- Sluit een dak tot een hoogte van 190 cm</li>
</ul>
</div>
`;
});

verandaPolySideWall.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/poly-sidewall.jpg" alt="polycarbonaat zijwand">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
      <p class="mb-20">Wilt u altijd perfect licht in uw veranda? <br>
      Met de polycarbonaat zijwand, <br>
      je zit beschut zonder daglicht te verliezen.</p>
      <ul >
      Veranda polycarbonaat zijwand:
        <li>- 16 mm polycarbonaat</li>
        <li>- Keuzes uit ondoorzichtig (vermindert zonlicht met 80%) en helder</li>
        <li>- Verkrijgbaar in verschillende maten</li>
      </ul>
    </div>
    `;
});

//===== carport info

carportGlassTop.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" id="carportGlassTop" src="assets/images/product/glass-roof.jpg" alt="Glass Top Carport">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
      <p class="mb-20">Heeft u liever een glazen carport? <br>
       Ook dat kan bij Veranda&Beyonde.</p>
      <ul >
      Carport glazen blad:
        <li>- Twee kleuropties (Antraciet en Creame)</li>
        <li>- Gelaagd glas</li>
        <li>- Maximaal 400 cm lang</li>
        <li>- LED's kunnen worden toegevoegd</li>
        <li>- Standaard of ronde gootopties</li>
      </ul>
    </div>
    `;
});

carportPolyTop.addEventListener("click", () => {
  info.innerHTML = `
<img class="d-none d-md-block col-6 w-50 h-auto" id="carpotPolyTop" src="assets/images/product/carport-poly-roof.jpg" alt="Polycarbonaat bovencarport">
<div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
  <p class="mb-20">
  Een aluminium autohoes is een mooie <br>
  bekleding met een zeer lange levensduur, <br>
   die ook weinig onderhoud vraagt. <br>
    Daarnaast een aluminium afdekkap <br>
     van Veranda&Beyonde ook <br>
     biedt een prachtig uitzicht.</p>
  <ul>
  Carport Polycarbonaat Dak:
    <li>- Drie kleuropties (Antraciet, Zwart en Creame)</li>
    <li>- Keuzes uit ondoorzichtig (vermindert zonlicht met 80%) en helder</li>
    <li>- Maximaal 400 cm lang</li>
    <li>- LED's kunnen worden toegevoegd</li>
    <li>- Standaard of ronde gootopties</li>
    <li>- 10 jaar garantie op profielen en kleur van polycarbonaat</li>
  </ul>
</div>
`;
});

carportWall.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" id="carportWall" src="assets/images/product/carport-wall.jpg" alt="Carportmuur">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
      <p class="mb-20">Wilt u altijd perfect licht in uw veranda? <br>
      Met de polycarbonaat zijwand, <br>
      je zit beschut zonder daglicht te verliezen.</p>
      <ul >
      Carport Zijwand:
        <li>- Drie kleuropties (Antraciet, Zwart en Creame)</li>
        <li>- Keuzes uit ondoorzichtig (vermindert zonlicht met 80%) en helder</li>
        <li>- Maximaal 400 cm lang</li>
        <li>- LED's kunnen worden toegevoegd</li>
        <li>- Standaard of ronde gootopties</li>
        <li>- 10 jaar garantie op profielen en kleur van polycarbonaat</li>
      </ul>
    </div>
    `;
});

glassSystemPhoto.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-system.jpg" alt="Glassysteem">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
      <p class="mb-20">Wilt u altijd perfect licht in uw veranda? <br>
      Met de polycarbonaat zijwand, <br>
      je zit beschut zonder daglicht te verliezen.</p>
      <ul >
      Glassystemen:
        <li>- 10 mm gehard glas</li>
        <li>- Extreem sterke aluminium profielen</li>
        <li>- Wind en stof stoppen tochtstrips</li>
      </ul>
    </div>
  `;
});

tintedGlass.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-system-dark.jpg" alt="Donkere bril">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
        <p class="mb-20">Wil je buiten zitten terwijl <br>
        wat privacy hebben? Onze getint glas systemen, <br>
        Met de polycarbonaat zijwand, <br>
        is de perfecte combinatie.</p>
        <ul >
        Glassystemen:
          <li>- 10 mm gehard glas</li>
          <li>- Extreem sterke aluminium profielen</li>
          <li>- Wind en stof stoppen tochtstrips</li>
          <li>- Getinte glazen panelen om privacy te behouden en zonlicht tegen te houden</li>
        </ul>
      </div>
    `;
});

sideGlassSystem.addEventListener("click", () => {
  info.innerHTML = `
    <img class="d-none d-md-block col-6 w-50 h-auto" src="assets/images/product/glass-system-side.jpg" alt="Side Glass-systeem">
    <div class="col-md-6 d-flex flex-column mt-20 mb-auto mt-auto text-center">
        <p class="mb-20">Wilt u altijd perfect licht in uw veranda? <br>
        Met de polycarbonaat zijwand, <br>
        je zit beschut zonder daglicht te verliezen.</p>
        <ul >
        Glassystemen:
          <li>- 10 mm gehard glas</li>
          <li>- Extreem sterke aluminium profielen</li>
          <li>- Wind en stof stoppen tochtstrips</li>
        </ul>
      </div>
    `;
});
