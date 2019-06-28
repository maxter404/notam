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
        location.href = "www.google.com";
      });
      $(".instagram").on("click", ()=>{
        location.href = "www.google.com";
      });
      $(".facebook").on("click", ()=>{
        location.href = "www.google.com";
      });
});