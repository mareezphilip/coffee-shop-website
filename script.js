let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 0,
          
        },
        500: {
          slidesPerView: 1,
          
        },     
        700: {
            slidesPerView: 2,
            
          },  
    },
    loop:true,
    grabCursor: true,
  });