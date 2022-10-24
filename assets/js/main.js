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
const modal = document.querySelector(".modal");
const nodeListImages = document.querySelectorAll(".card-img-top");
const arrayImages = Array.from(nodeListImages);
const closeModal = document.querySelector(".closeModal");
const details = document.getElementById("modalBox");

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
                                  <h5 class="card-title">Polycarbonate Roof Veranda</h5>
                                  <div class="card-text">
                                    <p >Polycarbonate sheet is a very good product to create a high-quality roof finish for your porch. It is also possible to make a wedge.</p>
                                    <ul class="p-3">

                                    <li>Available in 3 colors (Antraciet, black and cream)</li>
                                  
                                    <li>Roofing polycarbonate clear or opaque</li>
                                  
                                    <li>Round or straight model gutters</li>
                                  
                                    <li>Lighting LED spotlight set</li>
                                    
                                  
                                    <li>10-year warranty on profile and color accuracy</li>
                                    </ul>
                                  </div>
                                  <a
                                  href="assets/englishForms/verandaForm.html"
                                  class="main-btn mb-10 mt-50"
                                  >
                                    Get a quote
                                  </a>
                                </div>
                              </div>
                              
                              <div class="card col-10 col-lg-5 p-0 mt-30">
                                <img 
                                src="assets/images/showcase/glass-roof-veranda.jpg"
                                alt="Card image cap"
                                />
                                  <div class="card-body">
                                    <h5 class="card-title">Glass Roof Veranda</h5>
                                    <div class="card-text">
                                      <p >Do you always want perfect light? And also be able to enjoy the starry sky and clouds drifting by? Then a glass veranda is the best choice for you.</p>
                                      <ul class="p-3">
                                      <li>Available in 3 colors (Antraciet, black and cream)</li>
                                      <li> Roof covering 44.2 laminated safety glass</li>
                                      <li> Lengths possible up to 400cm</li>
                                      <li>Round or straight model gutters</li>
                                      <li>U-profiles, with draught strips</li>
                                      <li>Lighting LED spotlight set</li>
                                      <li>10-year warranty on profile and color accuracy</li>
                                      </ul>
                                    </div>
                                  
                                <a
                                  href="assets/englishForms/verandaForm.html"
                                  class="main-btn mb-10"
                                >
                                  Get a quote
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
                                    <h5 class="card-title">Polycarbonate Roof Carport</h5>
                                    <div class="card-text">
                                      <p>
                                      An aluminum car cover with a polycarbonate roof that has a very long lifespan, 
                                      provides the best protection for you car and also requires little maintenance. 
                                      In addition, an aluminum cover from Veranda &amp; Beyond also offers a beautiful appearance.
                                      </p>
                                      <ul class="p-3">

                                      <li> Available in 3 colors (Antraciet, black and cream)</li>
                                    
                                      <li> Roofing polycarbonate clear or opaque</li>
                                    
                                      <li> Round or straight model gutters</li>
                                    
                                      <li> Lighting LED spotlight set</li>
                                      
                                      <li> 10-year warranty on profile and color accuracy</li>
                                      </ul>
                                    </div>
                                    <a
                                    href="assets/englishForms/verandaForm.html"
                                    class="main-btn mb-10 mt-50"
                                    >
                                      Get a quote
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
                                  <h5 class="card-title">Glass Roof Carport</h5>
                                  <div class="card-text">
                                    <p >Would you prefer a glass carport? That is also possible at Valk &amp; Beyond.</p>
                                    <ul class="p-3">

                                    <li>Available in 3 colors (Antraciet, black and cream)</li>

                                    <li> Roof covering 44.2 laminated safety glass</li>

                                    <li> Lengths possible up to 400cm</li>
                                  
                                    <li> Round or straight model gutters</li>

                                    <li> U-profiles, with draught strips</li>
                                    
                                    <li> Lighting LED spotlight set</li>
                                    
                                  
                                    <li>10-year warranty on profile and color accuracy</li>
                                    </ul>
                                  </div>
                                  <a
                                        href="assets/englishForms/verandaForm.html"
                                        class="main-btn mb-10"
                                      >
                                        Get a quote
                                      </a>
                                  </div>
                                </div>
                          
      `;
    } else if (image.id == "slidingGlassDoors") {
      details.innerHTML = `<div class="card col-10 col-lg-5 p-0 mt-30">
                            <img 
                            src="assets/images/showcase/glass3.jpg"
                            alt="Card image cap"
                            />
                            <div class="card-body">
                            <h5 class="card-title">Sliding Glass Doors</h5>
                            <div class="card-text">
                              <p >The hard glass panels run on wheels with bearings and are equipped with carriers that automatically pull the panels along when closing. The glass panels run on a narrow bottom profile, which consists of up to 6 tracks, depending on the number of panels required. You can choose a wall that closes on the left, right or in the middle.
                              According to the dimensions of the glass panels, they are supplied in 10 mm ESG safety glass.
                              
                              The aluminum profiles are powder coated. You have a choice of two standard colors: cream-white and anthracite.</p>
                              <ul class="p-3">

                              <li> Extremely compact and strong aluminum profile</li>

                              <li> Uninsulated</li>

                              <li> With colored draught strip and fasteners</li>
                            
                              <li> 10 mm tempered safety glass</li>

                              <li> Rain and wind proof</li>
                              
                              <li> Aluminium strong bottom rail, 2 cm high</li>
                              
                            
                              <li>10-year warranty on profile and color accuracy</li>
                              </ul>
                            </div>
                              <a
                                    href="assets/englishForms/verandaForm.html"
                                    class="main-btn mb-10"
                                  >
                                    Get a quote
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
                            <h5 class="card-title">Awnings</h5>
                            <div class="card-text">
                              <p >We only work with materials of the best quality. Vernda &amp; Beyond supplies awnings that you can enjoy for many years. We guarantee excellent service and a high degree of customer friendliness. Only when you are satisfied, we are satisfied. Applied above the glass, the fabric is equipped with a protective finish.

                              The awning fabric is available in both antraciet and cream.</p>
                              <ul class="p-3">
                                <li> Top quality</li>
                                <li> Very high quality fabric</li>
                                <li> Free of charge customization</li>
                                <li> Motor: Somfy LTS with remote control</li>
                                <li> Only available for mounting above the canopy</li>
                                <li> Water repellent</li>
                              </ul>
                            </div>
                              <a
                                    href="assets/englishForms/verandaForm.html"
                                    class="main-btn mb-10"
                                  >
                                    Get a quote
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
