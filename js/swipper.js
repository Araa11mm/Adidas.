const swiper = new Swiper('.swiper', {
  
    direction: 'horizontal',
    loop: false,
    speed: 500,
    // spaceBetween: 20,
    // slidesPerView: 5,
    // slidesPerGroup: 4,
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

      300: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },

      600: {
        
        slidesPerView: 2.6,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },

      750: {
        
        slidesPerView: 3.5,
        spaceBetween: 10,
        slidesPerGroup: 3,
      },

      1000: {
        slidesPerView: 4.5,
        spaceBetween: 15,
        slidesPerGroup: 4,
      },

      
    }
  
    
  });




  const mobile = new Swiper('.gallery', {
    direction: 'horizontal',
    loop: false,
    speed: 500,
    
    breakpoints: {
      300: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },

      470: {
        
        slidesPerView: 1.6,
        spaceBetween: 12,
        
      },

      815: {
        
        slidesPerView: 2.1,
        spaceBetween: 12,
        
      },

      1081: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
  })

  
  