
/* button */

function r_btnName() {
	if(document.getElementById("researchBtn").innerHTML=="See Research Process") {
		document.getElementById("researchBtn").innerHTML="Hide Research Process";
	} else {
		document.getElementById("researchBtn").innerHTML="See Research Process";
	}
}

function d_btnName() {
	if(document.getElementById("designBtn").innerHTML=="See Design Process") {
		document.getElementById("designBtn").innerHTML="Hide Design Process";
	} else {
		document.getElementById("designBtn").innerHTML="See Design Process";
	}
}

function e_btnName() {
	if(document.getElementById("evaluationBtn").innerHTML=="See Evaluation Process") {
		document.getElementById("evaluationBtn").innerHTML="Hide Evaluation Process";
	} else {
		document.getElementById("evaluationBtn").innerHTML="See Evaluation Process";
	}
}

$(document).ready(function() {

	/* navbar */
	var lastScrollTop = 0;

	$(window).scroll(function(event) {
		var st = $(this).scrollTop();

		if(st > lastScrollTop) {
			// Scroll down
			$('nav').fadeOut();
		} else {
			// Scroll up
			$('nav').fadeIn().addClass('nav-up');
			if(st == 0) {
				$('nav').removeClass('nav-up');
			}
		}

		lastScrollTop = st;

	});

	/* back-to-top button */

	$(window).scroll(function() {
		if($(this).scrollTop() >= 200) {
			$('.back2top-btn').fadeIn(200);
		} else {
			$('.back2top-btn').fadeOut(200);
		}
	});

	$('.back2top-btn').click(function(event) {
		event.preventDefault();

		$('body, html').animate({scrollTop: 0}, 500);

		return false;
	});

	/* side navigation */

	$(window).scroll(function() {
		if($(this).scrollTop() >= 200) {
			$('.dotstyle').fadeIn(200);
		} else {
			$('.dotstyle').fadeOut(200);
		}
	});

	$('.dotstyle a').click(function(event) {
		event.preventDefault();

		var $href = $($(this).attr('href'));

		$(this).addClass('is-active');
		$(this).parent().siblings().children().removeClass('is-active');
		$('body, html').animate({scrollTop: $href.offset().top - 30}, 500);
	});



});











