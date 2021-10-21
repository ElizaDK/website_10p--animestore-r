
    //slide de livros do swiper - https://swiperjs.com/demos#responsive-breakpoints -
    
    var swiper = new Swiper(".books-slider", {
        loop:true,
        centeredSlides:true,
        autoplay:{
           delay:4400,
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




    // Section header abrir campo pesquisa

    searchForm = document.querySelector('.search-form');
    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.toggle('active');
    };

    // Section header abrir login

    let loginForm = document.querySelector('.login-form-container');
    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
    };
    // Section header  fechar login
    document.querySelector('#close-login-btn').onclick = () => {
        loginForm.classList.remove('active');
    };


    // Section header ficar fixo quando tiver barra rolagem
    window.onscroll = () =>{

        searchForm.classList.remove('active');

        if(window.scrollY > 80){
            document.querySelector('.header .header-2 ').classList.add('active');
        }else{
            document.querySelector('.header .header-2 ').classList.remove('active');
        }
    };

    window.onload = () =>{
        if(window.scrollY > 80){
            document.querySelector('.header .header-2 ').classList.add('active');
        }else{
            document.querySelector('.header .header-2 ').classList.remove('active');
        }
    };
















