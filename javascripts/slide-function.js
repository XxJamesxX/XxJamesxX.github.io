//This script uses two methods
//Slides must have the class or id of slide(number)
//Text can have a unique id or class which must be added to the (txt) array
$(document).ready(function(){
  var active = false;
  var previous = 1;
  var slides = ['slide1','slide2','slide3','slide4','slide5'];
  //The id's or classes for the (txt) arrray can have unique id's or classes which must be dded to this array
  var txt = ['#halo1-txt','#halo2-txt','#halo3-txt','#halo4-txt','#halo5-txt'];

  $('.slide1').addClass('active');
  $('.button1').addClass('button-active');
  $(txt[0]).addClass('txt-active');

  $('.button').on('click', function(){
    if (active) return;

    active = true;
    var btnClass = $(this).attr('class');
    $(this).addClass('button-active');
    $('.button' + previous).removeClass('button-active');
    calc(btnClass);
    return;
  });

  function calc(btnClass){
    for(i=1; i<=slides.length; i++){
        if (btnClass == 'button button'+ i){  
          
          animate(i);

          previous = i;
          return;
        }
    }
  }

  function animate(i){
    var txtCurrent = i - 1;
    var txtPrevious = previous -1;
  
    $('.slide' + i).animate({top:'0'}, 500);

    //If --$('.slide' + previous).removeClass('active');-- is not in  a callback
    //it leads to problems on initial page load
    $('.slide' + previous).delay(500).animate({
        top: "-100%",
    }, 0, function() {
        $('.slide' + previous).removeClass('active');
        //(active = false) must be within an animation callback function
        active = false;
    });

    $('.slide' + i).addClass('active');

    //Referres to the (txt) array declared at the top
    $(txt[txtPrevious]).fadeOut(0);
    $(txt[txtCurrent]).fadeIn(500);

    $(txt[txtPrevious]).removeClass('txt-active');
    $(txt[txtCurrent]).addClass('txt-active');
    return;
  }
});