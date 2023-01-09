var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: false,
    // centeredSlides: true,
    // spaceBetween: 30,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

hamburger = document.querySelector(".hamburger");
hamburger.onclick=function(){
  navBar=document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}
