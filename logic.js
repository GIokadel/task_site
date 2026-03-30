window.onload = function() {
  if (!sessionStorage.getItem('prepageDisplayed')) {
    sessionStorage.setItem('prepageDisplayed', true);
    setTimeout(function() {
      $('#prePage').fadeOut();
      $('body').css('overflow', 'visible');
    }, 2700);
  } else {
    $('#prePage').hide();
    $('body').css('overflow', 'visible');
  }
};
$ = jQuery;
$(document).ready(function () {
    var width = document.body.clientWidth;

    // scroll actions - header hiding + setting steps animation
    var last_scrollTop = 0,
        header_height = $('header').outerHeight();
    $(window).on('scroll', function () {
        var current_scroll = $(window).scrollTop();

        // header hiding
        if (current_scroll > 0 && current_scroll < $(document).height() - $(window).height()) {
            if (current_scroll > last_scrollTop && current_scroll > header_height) {
                $('header').addClass('is_hidden');
            } else {
                $('header').removeClass('is_hidden');
            }
            last_scrollTop = current_scroll;
        }
    });

    $("#menuOpen").click(function (e) {
        $(this).toggleClass("opened");
        $("body").toggleClass("is_overflow");
    });

    if (width >= 1025) {
        if ($('body').hasClass('home')) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('body').addClass("scrolled");
                } else {
                    $('body').removeClass("scrolled");
                }
            });
        }
    } else {
        $("#mainMenu .menu-item-has-children > a").append("<span></span>");
        $("#mainMenu .menu-item-has-children span").click(function () {
            $(this).parent().next().slideToggle(300);
            $(this).toggleClass("active");
            return false;
        });
        $('p').each(function () {
            var $this = $(this);
            if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
                $this.remove();
        });
        $('.team').each(function () {
            let slider_holder = $(this),
                swiper_instance = slider_holder.find('.swiper');

            let rewards_slider = new Swiper(swiper_instance[0], {
                spaceBetween: 8,
                slidesPerView: 1,
                watchOverflow: true,
                autoHeight: true,
                breakpoints: {
                    460: {
                        slidesPerView: 2,
                    },
                    840: {
                        slidesPerView: 3,
                    }
                }
            });
        });
    }

    $('.titles a[href^="#"]').on('click', function(event) {
        var headerHeight = 20;
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 1500);
        }
    });

    // swiper - block__custom_slider
    $('.gallerySlider').each(function () {
        let slider_holder = $(this),
            swiper_instance = slider_holder.find('.swiper'),
            pagination = slider_holder.find('.swiper-pagination'),
            prev = slider_holder.find('.swiper-button-prev'),
            next = slider_holder.find('.swiper-button-next');

        let block_slider = new Swiper(swiper_instance[0], {
            autoHeight: true,
            pagination: {
                el: pagination[0],
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: next[0],
                prevEl: prev[0]
            },
        });
    });

    $('.historySlider').each(function () {
        let slider_holder = $(this),
            swiper_instance = slider_holder.find('.swiper');

        let rewards_slider = new Swiper(swiper_instance[0], {
            spaceBetween: 16,
            slidesPerView: 1,
            watchOverflow: true,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1250: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            }
        });
    });

    //WPCF7
    $(this).on('click', '.wpcf7-not-valid-tip', function () {
        $(this).prev().trigger('focus');
        $(this).fadeOut(500, function () {
            $(this).remove();
        });
    });

    $("iframe").wrap("<div class='fullframe'></div>");
});