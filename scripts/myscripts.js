// JavaScript Document

$(document).ready(function(){


	var count = 0;
	
  $(".head").click(function(){
  	count=count+1;
  	if(count%2==0){
	$(".head").css("margin-left","3%");
	$(".conversation").css("opacity","0");

	
  	}

  	else{
	$(".head").css("margin-left","200px");
  	$(".head").css("transition", "all 440ms ease-out");
  	$(".head").css("transition-duration","350ms");
  	$(".conversation").css("opacity","1");
  	$(".conversation").css("transition", "all 280ms ease-out");
    $(".conversation").css("transition-timing-function", "cubic-bezier(0.135,1.225,0.21,1.09");
    $(".conversation").css("transition-delay","220ms");
    $(".conversation").css("transition-duration","280ms") ;
    $(".testadi").css("opacity","0");

  	}
  

  });


  $(".circle").mouseenter(function(){

  	
  	$(this).animate({top:'-20px'});
  	$(this).find(".training").css("opacity","0.8");
  	

  	});

$(".circle").mouseout(function(){

  	
  	$(this).animate({top:'0px'});


  });

$('.fdw-background').hover(
		function () {
			$(this).animate({opacity:'1'});
		},
		function () {
			$(this).animate({opacity:'0'});
		}
	);	
 
});
 




