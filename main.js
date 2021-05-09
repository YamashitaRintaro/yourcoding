
// ハンバーガーメニュー

(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);

// アコーディオンメニュー

$(function () {
  $('.ac-parent').on('click', function () {
  $(this).next().slideToggle();
});
});

// スライダー

 swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  loop: true,
  slidesPerView: 1.5,
  centeredSlides : true,
  spaceBetween: 20,
  breakpoints: {
    1100: {
        slidesPerView: 4,
        spaceBetween: 56,
    },
    600: {
        slidesPerView: 3,
        spaceBetween:20,       
    },
},

});

// チェックボックス

$(function() {
  $('#submit').prop('disabled', true);

  $('#check').on('click', function() {
    if ( $(this).prop('checked') == false ) {
      $('#submit').prop('disabled', true);
    } else {
      $('#submit').prop('disabled', false);
    }
  });
});

// 参考資料 https://www.nxworld.net/jquery-switch-disable-input-button.html


AOS.init({
  offset: 120,
  delay: 100,
  duration: 700,
  easing: 'ease-in',
  once: true,
});

// 参考資料 https://michalsnik.github.io/aos/


// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// 参考資料 https://hikopro.com/jquery-scroll/

// Googleフォーム
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfUt0fT8PRXh8XoGnUX4zcOia5vkNhMtoTlBp5ldUyCGUU3cg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          // window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
      
    });
    event.preventDefault();
  });
  
});



$(function () {
  $('.submit-button').on('click', function () {
    e.preventDefault();
    window.location.href = "thanks.html";
});
});
