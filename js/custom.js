$(document).ready(function() {
    
    $("#fullpage").fullpage();
    
    initComparisons();
    
    $(".responsive-icon").click(function() {
        $(this).addClass("responsive-icon-change");
        $(".responsive-icon-close").addClass("responsive-icon-close-change");
        
        $(".sub-contact-mail").fadeIn(100);
        $(".sub-contact-fb").fadeIn(300);
        $(".sub-contact-linkedin").fadeIn(500);
    });
    
    $(".responsive-icon-close").click(function() {
        $(this).removeClass("responsive-icon-close-change");
        $(".responsive-icon").removeClass("responsive-icon-change");
        
        $(".sub-contact-mail").fadeOut(500);
        $(".sub-contact-fb").fadeOut(300);
        $(".sub-contact-linkedin").fadeOut(100); 
    });
    
    /********************/
	/*** project link ***/
    /********************/
    
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
    
    /**************************/
	/*** back-to-top button ***/
    /**************************/

	$(window).scroll(function() {
		if($(this).scrollTop() >= 200) {
			$(".back2top-btn").fadeIn(200);
		} else {
			$(".back2top-btn").fadeOut(200);
		}
	});
    
    /*********************************/
    /*** project horizontal scroll ***/
    /*********************************/
    
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
    
    /*****************/
    /*** highlight ***/
    /*****************/

    $(window).on("scroll", function() {
        highlight();
    });
    
    function highlight() {
        var scroll = $(window).scrollTop();
        var height = $(window).height();
        
        $(".highlight").each(function() {
            var pos = $(this).offset().top;
            var bounds = pos + $(this).outerHeight();
            
            if (scroll + height >= bounds) {
                $(this).addClass("highlight-active");
            }
            else {
                $(this).removeClass("highlight-active");
            }
        });
    }
    
    



});









