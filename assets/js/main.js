$(document).ready(function(){
    $('#serviciosSlider').slick({
        slide: '.slideServicios',        
        infinite: true,
        slidesToShow: 1,
        rows: 0,
        arrows: false,
        dots: true
      });
      $(".linkedin").on("click", ()=>{
        location.href = "https://www.linkedin.com/company/notammx";
      });
      $(".instagram").on("click", ()=>{
        location.href = "https://www.instagram.com/notam.mx/";
      });
      $(".facebook").on("click", ()=>{
        location.href = "https://www.facebook.com/notam.mx/";
      });
      $(".purpleBtn").on("click", ()=>{
        $('html, body').animate({
          scrollTop: $(".somosSection").offset().top
      }, 2000);
      });
});