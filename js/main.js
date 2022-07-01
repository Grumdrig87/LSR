
jQuery(document).ready(function($) {
  
  //slider

  const wheelSlide = new Swiper('[data-kompl]', {
    slidesPerView: 4,
    spaceBetween: 23,
    initialSlide : 0,
    navigation: {
      nextEl: '.gk-next',
      prevEl: '.gk-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is >= 480px
      577: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 640px
      769: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      994: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 23
      }
    }
  });
  var offerSlide = new Swiper('[data-offer]', {
    slidesPerView: 4,
    spaceBetween: 23,
    initialSlide : 0,
    watchSlidesProgress: true,
    slideVisibleClass: 'swiper-slide-visible',
    navigation: {
      nextEl: '.offer__next',
      prevEl: '.offer__prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 640px
      769: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      994: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 23
      }
    }
  });
  //adaptive
  if ($(window).width() <= 768) {
    offerSlide.destroy();
  }
  if ($(window).width() > 768) {
    $('.offer__more').click(function(){
      if ($(this).hasClass('less')){
        $(this).removeClass('less').html('Больше предложений<svg width="16" height="16"><use xlink:href="img/sprite.svg#caret"></use></svg>');
        $(this).closest('.offer__slide').removeClass('active').siblings().removeClass('hidden');
        $(this).closest('.offer__sliderwrap').find('.swiper-button').removeClass('hidden');
        $(this).closest('.offer__slide').find('.offer__slide-other').hide(10).removeClass('show');  
        offerSlide = new Swiper('[data-offer]', {
          slidesPerView: 4,
          spaceBetween: 23,
          initialSlide : 0,
          watchSlidesProgress: true,
          slideVisibleClass: 'swiper-slide-visible',
          navigation: {
            nextEl: '.offer__next',
            prevEl: '.offer__prev',
          },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      // when window width is >= 640px
      769: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      994: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 23
      }
    }
        });
      } else {   
        $(this).addClass('less').html('Свернуть<svg width="16" height="16"><use xlink:href="img/sprite.svg#caret-w"></use></svg>');
        offerSlide.destroy();
        $(this).closest('.offer__slide').addClass('active').siblings().addClass('hidden');
        $(this).closest('.offer__sliderwrap').find('.swiper-button').addClass('hidden');
        $(this).closest('.offer__slide').find('.offer__slide-other').show(100).addClass('show');
      }
    })
  }
  $('[data-tab]').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('[data-range]').on('input',function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #395B87), '
                + 'color-stop(' + val + ', #fff)'
                + ')'
                );
    var value = $(this).val();
    $(this).closest('.calc__input').find('[data-num]').val(value);
});
$('[data-range]').each(function(){
  var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #395B87), '
                + 'color-stop(' + val + ', #fff)'
                + ')'
                );
    var value = $(this).val();
  $(this).closest('.calc__input').find('[data-num]').val(value);
})
$('[data-num]').on('change',function(){
  var obj = $(this),
      max = obj.data('max'),
      min = obj.data('min');
      if (obj.val() >= max)
      obj.val(max);
      else if (obj.val() <= min)
      obj.val(min);
    var value = $(this).val(),
        range = $(this).parent().find('[data-range]');
  range.val(value);
  range.each(function(){
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      
      $(this).css('background-image',
                  '-webkit-gradient(linear, left top, right top, '
                  + 'color-stop(' + val + ', #395B87), '
                  + 'color-stop(' + val + ', #fff)'
                  + ')'
                  );
  })
})
$('[data-switch]').on('change', function() {
  if ($(this).is(':checked')) {
    $('[data-perc]').addClass('hidden');
    $('[data-rub]').text('%');
    $('[data-first]').attr('data-max', 100).val(0);
    $('[data-firstr]').attr('max', 100).attr('value', 0).attr('step', 1);
    
  } else {
    $('[data-perc]').removeClass('hidden')
    $('[data-rub]').text('₽');
    $('[data-first]').attr('data-max', 20000000).val(0);
    $('[data-firstr]').attr('max', 20000000).attr('value', 0).attr('step', 10000);
  }
  var val = ($('[data-firstr]').val() - $('[data-firstr]').attr('min')) / ($('[data-firstr]').attr('max') - $('[data-firstr]').attr('min'));
      
      $('[data-firstr]').css('background-image',
                  '-webkit-gradient(linear, left top, right top, '
                  + 'color-stop(' + val + ', #395B87), '
                  + 'color-stop(' + val + ', #fff)'
                  + ')'
                  );
})

})
