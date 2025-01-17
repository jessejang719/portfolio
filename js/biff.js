$(document).ready(function(){
    // prevent a event
    $('a').click(function(e){
      e.preventDefault()
    });
    // swiper-sponsor
    new Swiper(".sw-sponsor", {
        autoplay: true,
        width: 280,
        speed: 300,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // swiper-official
    new Swiper(".sw-official", {
      autoplay: false, 
      loop: true, 
      speed: 1000,
    });
    // swiper-event
    new Swiper(".sw-event", {
      slidesPerView: 4,
      spaceBetween: 0,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
    });
    // swiper-video
    new Swiper(".sw-video", {
      loop: true, 
      slidesPerView: 4,
      spaceBetween: 0,
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
    });
    // swiper-banner
    new Swiper(".sw-banner", {
      loop: true, 
      autoplay: true,
      slidesPerView: 9,
      // spaceBetween: 50,
    });
    // film - active 
    $('.tab-nav li').click(function(e){
      e.preventDefault()
      $('.tab-nav li a').removeClass('active')
      $(this).find('a').addClass('active')

      $('.fi-list').hide()
      let idx = $(this).index()
      $('.fi-list').eq(idx).show()
    })
    $('.tab-nav li').eq(0).trigger('click')

    $(window).scroll(function(){
      let windowsct = $(window).scrollTop()
      if(windowsct >= 300){
        $('header').addClass('scrolled')
      } else {
        $('header').removeClass('scrolled')
      }
    })
  });