var menuFlag = false;

$(document).ready(function() {
    $(".blog-title").fadeIn(500);
 	$(".icon-container").fadeIn(700);
 	$('.hero-icon').hover(hoverOn, hoverOff);
 	$("#mobile-icon").click(menuOn);
});

$(window).resize(function() {
	if ($(window).width() > 700 && menuFlag === true) {
		menuOff();
	}
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
		$("#navbar").animate({height: '+=237px'},750);
		$(this).attr("src", "../images/close.png");
		menuFlag = true;
	} else if (menuFlag === true){
		$("#navbar").animate({height: '-=237px'},750);
		$(this).attr("src", "../images/mobile-menu.png");
		menuFlag = false;
	}	
}

function menuOff() {
	$("#navbar").animate({height: '-=237px'},750);
	$("#mobile-icon").attr("src", "../images/mobile-menu.png");
	menuFlag = false;
}