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

const modal = document.querySelector(".modal");
const nodeListImages = document.querySelectorAll(".card-img-top");
const arrayImages = Array.from(nodeListImages);
const closeModal = document.querySelector(".closeModal");
const details = document.getElementById("modalBox");
const productImageContainer = document.getElementById("equipmentImage");

nodeListImages.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "block";
    if (image.id == "veranda") {
      details.innerHTML = `
                              <div class="card col-10 col-lg-5 p-0 mt-30">
                                <img 
                                src="assets/images/showcase/poly-roof-veranda.jpg"
                                alt="Card image cap"
                                />
                                <div class="card-body">
                                  <h5 class="card-title">Polycarbonaat dak Veranda</h5>
                                  <div class="card-text">
                                    <p >Polycarbonaatplaat is een zeer goed product om een hoogwaardig dakafwerking voor uw veranda te realiseren. Ook is het mogelijk om van deze polycarbonaat platen een spiestuk of een zijwand aan uw luifel te maken.</p>
                                    <ul class="p-3">
                                    <li> Verkrijgbaar in 3 kleuren (Antraciet, zwart en crème)</li>
                                  
                                    <li>Staanders in halfrond of vierkant</li>
                                  
                                    <li> Dakbedekking polycarbonaat helder of opaal</li>
                                  
                                    <li> Verlichting LED-spotset</li>
                                    
                                  
                                    <li> 10 jaar garantie op de profiel en kleurechtheid</li>
                                    </ul>
                                  </div>
                                  <a
                                  href="assets/dutchForms/verandaFormDutch.html"
                                  class="main-btn mb-10 mt-50"
                                  >
                                  Vraag offerte aan
                                  </a>
                                </div>
                              </div>
                              
                              <div class="card col-10 col-lg-5 p-0 mt-30">
                                <img 
                                src="assets/images/showcase/glass-roof-veranda.jpg"
                                alt="Card image cap"
                                />
                                  <div class="card-body">
                                    <h5 class="card-title">Glazen dak Veranda</h5>
                                    <div class="card-text">
                                      <p >Wilt u altijd een perfecte lichtinval? En daarnaast kunnen genieten van de sterrenhemel en voorbijdrijvende wolken? Dan is een glazen veranda voor u de beste keuze.</p>
                                      <ul class="p-3">
                                      <li> Verkrijgbaar in 3 kleuren (Antraciet, zwart en crème)</li>
                                      <li> Lengtes mogelijk tot maximaal 400cm</li>
                                      <li> Dakbedekking 44.2 gelaagd veiligheidsglas</li>
                                      <li> Verlichting LED-spotset</li>
                                      <li> Standaard een ronde of klassieke siergoot</li>
                                      <li> U-profielen, voorzien van tochtstrips</li>
                                      </ul>
                                    </div>
                                  
                                <a
                                  href="assets/dutchForms/verandaFormDutch.html"
                                  class="main-btn mb-10"
                                >
                                  Vraag offerte aan
                                </a>
                                </div>
                            </div>
                          
      `;
    } else if (image.id == "carport") {
      details.innerHTML = `
                              <div class="card col-10 col-lg-5 p-0 mt-30">
                                <img 
                                src="assets/images/showcase/poly-roof-carport.jpg"
                                alt="Card image cap"
                                />
                                  <div class="card-body">
                                    <h5 class="card-title">Polycarbonaat Dak Carport</h5>
                                    <div class="card-text">
                                      <p>
                                      Een aluminium autohoes met een polycarbonaat dak dat een zeer lange levensduur heeft, 
                                      biedt de beste bescherming voor uw auto en vergt bovendien weinig onderhoud. 
                                      Daarnaast biedt een aluminium overkapping van Veranda &amp; Beyond ook een prachtige uitstraling.
                                      </p>
                                      <ul class="p-3">
                                      <li> Verkrijgbaar in 3 kleuren (antraciet, zwart en crème)</li>
                                    
                                      <li> Dakbedekking polycarbonaat helder of ondoorzichtig</li>
                                    
                                      <li> Ronde of rechte model goten</li>
                                    
                                      <li> Verlichting LED-spotset</li>
                                      
                                      <li> 10 jaar garantie op profiel en kleurnauwkeurigheid</li>
                                      </ul>
                                    </div>
                                    <a
                                    href="assets/dutchForms/carportFormDutch.html"
                                    class="main-btn mb-10 mt-50"
                                    >
                                    Vraag offerte aan
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="card col-10 col-lg-5 p-0 mt-30">
                                <img 
                                src="assets/images/showcase/glass-roof-carport.jpg"
                                alt="Card image cap"
                                />
                                  <div class="card-body">
                                  <h5 class="card-title">Glazen Dak Carport</h5>
                                  <div class="card-text">
                                    <p >Wilt u liever een glazen carport? Ook dat is mogelijk bij Veranda &amp; Beyond.</p>
                                    <ul class="p-3">
                                    <li> Verkrijgbaar in 3 kleuren (antraciet, zwart en crème)</li>
                                    <li> Dakbedekking 44.2 gelaagd veiligheidsglas</li>
                                    <li> Lengtes mogelijk tot 400cm</li>
                                  
                                    <li> Ronde of rechte model goten</li>
                                    <li> U-profielen, met tochtstroken</li>
                                    
                                    <li> Verlichting LED-spotset</li>
                                    
                                  
                                    <li> 10 jaar garantie op profiel en kleurnauwkeurigheid</li>
                                    </ul>
                                  </div>
                                  <a
                                        href="assets/dutchForms/carportFormDutch.html"
                                        class="main-btn mb-10"
                                      >
                                      Vraag offerte aan
                                      </a>
                                  </div>
                                </div>
                          
      `;
    } else if (image.id == "slidingGlassDoors") {
      details.innerHTML = `<div class="card col-10 col-lg-4 p-0 mt-30">
                            <img 
                            src="assets/images/showcase/glass3.jpg"
                            alt="Card image cap"
                            />
                            <div class="card-body">
                            <h5 class="card-title">Glazen schuifdeuren</h5>
                            <div class="card-text">
                              <p >De hardglaspanelen lopen op gelagerde wielen en zijn voorzien van meenemers die de panelen bij het sluiten automatisch meetrekken. De glaspanelen lopen op een smal bodemprofiel, dat bestaat uit maximaal 6 sporen, afhankelijk van het aantal benodigde panelen. U kunt kiezen voor een wand die links, rechts of in het midden sluit.
                              Volgens de afmetingen van de glaspanelen worden ze geleverd in 10 mm ESG veiligheidsglas..
                              
                              De aluminium profielen zijn gepoedercoat. U kunt kiezen uit twee standaardkleuren: roomwit en antraciet.</p>
                              <ul class="p-3">
                              <li> Uiterst compact en sterk aluminium profiel</li>
                              <li> Ongeïsoleerd</li>
                              <li> Met gekleurde tochtstrook en sluitingen</li>
                            
                              <li> 10 mm gehard veiligheidsglas</li>
                              <li> Regen- en windbestendig</li>
                              
                              <li> Aluminium sterke bodemrail, 2 cm hoog</li>
                              
                            
                              <li>10 jaar garantie op profiel en kleurnauwkeurigheid</li>
                              </ul>
                            </div>
                              <a
                                    href="assets/dutchForms/glassSystemFormDutch.html"
                                    class="main-btn mb-10"
                                  >
                                  Vraag offerte aan
                                  </a>
                              </div>
                            </div>`;
    } else if (image.id == "awnings") {
      details.innerHTML = `<div class="card col-10 col-lg-5 p-0 mt-30">
                            <img 
                            src="assets/images/showcase/awning3.jpg"
                            alt="Card image cap"
                            />
                            <div class="card-body">
                            <h5 class="card-title">Zonneschermen</h5>
                            <div class="card-text">
                              <p >Wij werken alleen met materialen van de beste kwaliteit. Veranda &amp; Beyond levert zonweringen waar u jarenlang van kunt genieten. Wij staan garant voor een uitstekende service en een hoge mate van klantvriendelijkheid. Pas als u tevreden bent, zijn wij tevreden. Aangebracht boven het glas is het doek voorzien van een beschermende afwerking.
                              Het zonweringdoek is verkrijgbaar in zowel antraciet als crème.</p>
                              <ul class="p-3">
                                <li> Topkwaliteit</li>
                                <li> Zeer hoogwaardige stof</li>
                                <li> Gratis maatwerk</li>
                                <li> Motor: Somfy LTS met afstandsbediening</li>
                                <li> Alleen beschikbaar voor montage boven de luifel</li>
                                <li> Water repellent</li>
                              </ul>
                            </div>
                              <a
                                    href="assets/dutchForms/sunRoofFormDutch.html"
                                    class="main-btn mb-10"
                                  >
                                  Vraag offerte aan
                                  </a>
                              </div>
                            </div>`;
    }

    document.body.style.overflowY = "hidden";
  });
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflowY = "visible";
});
