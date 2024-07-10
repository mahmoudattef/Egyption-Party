/// <reference types="../@types/jquery" />
$(function(){
   
$('.loader').fadeTo(1000,0.5,function(){
        $('body').css('overflow','auto');
        $('.loading').remove();
    })

})

    
$('.open').on('click',function(){
    $('.menu').removeClass('d-none').animate({width:'70%'},1000)
})
$('.btn-close').on('click',function(){
    
    
    $('.menu').animate({width:0},2000 ,function(){
        $('.menu').addClass('d-none')
    })
    
})
$(".menu a").on('click',function(){
    
    var ele= $(this).attr("href");
    
    var sections = $(ele).offset().top;
    
    $("html , body").animate({scrollTop:sections},1000);
    
})
let openOff =$('#Duration').offset().top
$(window).on('scroll',function(){

    let scrollWindow = $(window).scrollTop();
    if (scrollWindow > openOff ) {
        $('.open').addClass('d-none')
    }else{
        $('.open').removeClass('d-none')
    }
})

// duration

$('.titile ').on('click',function(){
    $('.caption').not($(this).next()).slideUp(500);
    $(this).next('.caption').slideToggle(500)
    
})

//countDown
var countDownDate = new Date("oct 25, 2024 15:37:25").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 

$("#days").text(days+"D")
$("#hours").text(hours+"h")
$("#min").text(minutes+"m")
$("#sec").text(seconds+"s")


if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000)

// textArea

$("#textArea").on("input", function() {
    let maxLength = 100;
    let currentLength = $(this).val().length;
    let remainingLength = maxLength - currentLength;
  
    if (remainingLength >= 0) {
        $("#areaCounter").text(remainingLength);
    } else {
        $("#areaCounter").text("your available character finished");
        $(this).val($(this).val().substring(0, maxLength));
     
    }
  
  });