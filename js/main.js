var menuFlag = false;

$(document).ready(function() {
 	$(".icon-container").fadeIn(700);
 	$('.icon').hover(hoverOn, hoverOff);
 	$("#mobile-icon").click(menuOn);
 	photoResize();
});

$(window).resize(function() {
  if ($(window).width() > 700 && menuFlag === true) {
     menuOff();
  }
  photoResize();
});

function hoverOn() {
    //$(this).css({height: '+=1%', width: '+=1%'});
    $(this).animate({ opacity: 0.7 }, 200);
}
function hoverOff() {
    //$(this).css({height: "", width: ""});
    $(this).animate({ opacity: 1.0 }, 200);
}

function menuOn() {
	if (menuFlag === false){
		$("#navbar").animate({height: '+=280px'},750);
		$(this).attr("src", "images/close.png");
		menuFlag = true;
	} else if (menuFlag === true){
		$("#navbar").animate({height: '-=280px'},750);
		$(this).attr("src", "images/mobile-menu.png");
		menuFlag = false;
	}	
}

function menuOff() {
	$("#navbar").animate({height: '-=280px'},750);
	$("#mobile-icon").attr("src", "images/mobile-menu.png");
	menuFlag = false;
}

function photoResize() {
  if ($(window).width() > 700 && $(".col-md-4").width() > 347) {
      $(".img-photo1").css({"width":"115px"});
      $(".img-photo2").css({"width":"115px"});
      $(".img-photo3").css({"width":"115px"});
  }

	if ($(window).width() > 700 && $(".col-md-4").width() < 347) {
  		$(".img-photo1").css({"width":"92px"});
  		$(".img-photo2").css({"width":"92px"});
  		$(".img-photo3").css({"width":"92px"});
  }

  if ($(window).width() < 700 && $(".col-md-4").width() > 300) {
      $(".img-photo1").css({"width":"115px"});
      $(".img-photo2").css({"width":"115px"});
      $(".img-photo3").css({"width":"115px"});
  }

  if ($(window).width() < 700 && $(".col-md-4").width() < 300 && $(".col-md-4").width() > 264) {
      $(".img-photo1").css({"width":"107px"});
      $(".img-photo2").css({"width":"107px"});
      $(".img-photo3").css({"width":"107px"});
  }

  if ($(window).width() < 700 && $(".col-md-4").width() < 264) {
      $(".img-photo1").css({"width":"92px"});
      $(".img-photo2").css({"width":"92px"});
      $(".img-photo3").css({"width":"92px"});
  }
}

$(".rotate").textrotator({
  animation: "flipUp", 
  separator: ",", 
  speed: 2400
});