$(document).ready(function () {
    $("#banner ul").bxSlider({
      auto: true,
      speed: 1000,
      mode: "fade",
    });
    $("#fotos-galeria .container").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
      image: {
        verticalFit: true,
        /*titleSrc: function(item) {
                  return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
              }*/
      },
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        opener: function (element) {
          return element.find("img");
        },
      },
    });
  });
  
