 //slide de livros do swiper - https://swiperjs.com/demos#responsive-breakpoints -
    
 var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
       delay:4400,
       disableOnInteraction:false,
   },
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
     450: {
        slidesPerView: 2,
      
      },
      768: {
        slidesPerView: 3,
      
      },
      1024: {
        slidesPerView: 4,
       
      },
    },
  });
//section arrivals
  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
       delay:3400,
       disableOnInteraction:false,
   },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
     
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });

  //section reviews
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
       delay:3000,
       disableOnInteraction:false,
   },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
     
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });

  //section blogs
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
       delay:3000,
       disableOnInteraction:false,
   },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
     
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });