// JavaScript Document
$(function(){
    $('.slider').slick({
        arrows:false,
        autoplay:true,
        speed:2000,
        centerMode:true,
        dots:false,
        slidesToShow: 1,
        rows:1,
});
        $('.slider-2').slick({
        arrows:false,
        autoplay:true,
        speed:2000,
        centerMode:true,
        dots:false,
        slidesToShow: 3,
        rows:1,
        
});
    $('a[href^=#]').click(function(){
    var target = ($($(this).attr('href')).offset().top)-50+'px';

    $('html,body').animate({
      scrollTop: target
    }, 1500);

    return false;
    });
    
    $('.button').click(function(){
       $('.button').removeClass('current');
       $(this).addClass('current');
        
       if($(this).attr('id') == 'template'){
           $('#js__original').addClass('hide');
           $('#js__template').removeClass('hide');
       }else{
           $('#js__template').addClass('hide');
           $('#js__original').removeClass('hide');
       }
       
    });
    
    $('.hamburger-btn').on('click',function(){
        $(this).toggleClass('active');
        $('.__left').toggleClass('show');
        return false;
    });
    
    $(window).scroll(function(){
     var scroll = $(this).scrollTop();
          /*var position = $('#service').offset().top;*/
    if(scroll > 30){
        $('.-circle').css('opacity','0');
        $('.fd li:nth-child(1) .-circle').css('opacity','1');
    }if(scroll > 180){
        $('.-circle').css('opacity','0');
        $('.fd li:nth-child(2) .-circle').css('opacity','1');
    }if(scroll > 3024){
        $('.-circle').css('opacity','0');
        $('.fd li:nth-child(3) .-circle').css('opacity','1');
    }if(scroll > 3650){
        $('.-circle').css('opacity','0');
        $('.fd li:nth-child(4) .-circle').css('opacity','1');
    }if(scroll > 4400){
        $('.-circle').css('opacity','0');
        $('.fd li:nth-child(5) .-circle').css('opacity','1');
    }
        
        $('.scroll').html('スクロール量'+scroll+'px');
        
        
});
});