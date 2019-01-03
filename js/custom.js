$(document).ready(function() {

	/* button */
	// $("#researchBtn").click(function() {
	// 	if($("#researchBtn").text() == "See Research Process") {
	// 		$("#researchBtn").text("Hide Research Process");
	// 	} else {
	// 		$("#researchBtn").text("See Research Process");
	// 	}
	// });

	// $("#designBtn").click(function() {
	// 	if($("#designBtn").text() == "See Design Process") {
	// 		$("#designBtn").text("Hide Design Process");
	// 	} else {
	// 		$("#designBtn").text("See Design Process");
	// 	}
	// });

	// $("#evaluationBtn").click(function() {
	// 	if($("#evaluationBtn").text() == "See Evaluation Process") {
	// 		$("#evaluationBtn").text("Hide Evaluation Process");
	// 	} else {
	// 		$("#evaluationBtn").text("See Evaluation Process");
	// 	}
	// });
    
//    ScrollReveal().reveal(".project", { delay: 500 });
//    ScrollReveal().reveal(".intro", { delay: 500 });
//    

//    $('#fullpage').fullpage();
    
    
    
    initComparisons();

	/* navbar */
//	var lastScrollTop = 0;
//
//	$(window).scroll(function(event) {
//		var st = $(this).scrollTop();
//
//		if(st > lastScrollTop) {
//			// Scroll down
//			$("nav").fadeOut();
//		} else {
//			// Scroll up
//			$("nav").fadeIn().addClass("nav-up");
//			if(st == 0) {
//				$("nav").removeClass("nav-up");
//			}
//		}
//
//		lastScrollTop = st;
//
//	});
    

	/* project */
    
    $("#foodex").click(function() {
		location.href = "foodex.html"
	});
    
    $("#vstyle").click(function() {
		location.href = "vstyle.html"
	});

	$("#fittingeasy").click(function() {
		location.href = "fittingeasy.html"
	});

	$("#robustime").click(function() {
		location.href = "robustime.html"
	});

	/* back-to-top button */

	$(window).scroll(function() {
		if($(this).scrollTop() >= 200) {
			$(".back2top-btn").fadeIn(200);
		} else {
			$(".back2top-btn").fadeOut(200);
		}
	});

	$(".back2top-btn").click(function(event) {
		event.preventDefault();

		$("body, html").animate({scrollTop: 0}, 500);

		return false;
	});

	/* side navigation */

	// $(window).scroll(function() {
	// 	if($(this).scrollTop() >= 200) {
	// 		$(".dotstyle").fadeIn(200);
	// 	} else {
	// 		$(".dotstyle").fadeOut(200);
	// 	}
	// });

	// $(".dotstyle a").click(function(event) {
	// 	event.preventDefault();

	// 	var $href = $($(this).attr("href"));

	// 	$(this).addClass("is-active");
	// 	$(this).parent().siblings().children().removeClass("is-active");
	// 	$("body, html").animate({scrollTop: $href.offset().top - 30}, 500);
	// });
    
    $(window).resize(function() {
        var imgWidth = $("#homepage-img1").css("width");
        
        $("#homepage-img2").css("width", imgWidth);
    });
    
    function initComparisons() {
        var x, i;
        x = $(".img-comp-overlay");
        
        for (i = 0; i < x.length; i++) {
            compareImages(x[i]);
        }
    }
    
    function compareImages(img) {
        var imgWidth = $("#homepage-img1").css("width");
        
        $("#homepage-img2").css("width", imgWidth);
        
        var w;
        var currentMousePos = { x: -1, y: -1 };
        
        w = img.offsetWidth;
        
        img.style.width = (w / 2) + "px";
        
        $(document).mousemove(function(event) {
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
            
            var a, x = 0;
            
            a = img.getBoundingClientRect();
            
            x = currentMousePos.x - a.left;
            
            if (x < 0) { x = 0; }
            if (x > w) { x = w; }
            
            img.style.width = x + "px";
        });
        
        
    }
    
    $('#fullpage').fullpage();



});









