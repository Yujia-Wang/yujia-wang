$(document).ready(function() {

	/* preloader */
	setTimeout(function() {
		$(".loader-wrapper").fadeOut();
		$("#homepage").fadeIn(1000);
	}, 3500);

	/* button */
	$("#researchBtn").click(function() {
		if($("#researchBtn").text() == "See Research Process") {
			$("#researchBtn").text("Hide Research Process");
		} else {
			$("#researchBtn").text("See Research Process");
		}
	});

	$("#designBtn").click(function() {
		if($("#designBtn").text() == "See Design Process") {
			$("#designBtn").text("Hide Design Process");
		} else {
			$("#designBtn").text("See Design Process");
		}
	});

	$("#evaluationBtn").click(function() {
		if($("#evaluationBtn").text() == "See Evaluation Process") {
			$("#evaluationBtn").text("Hide Evaluation Process");
		} else {
			$("#evaluationBtn").text("See Evaluation Process");
		}
	});

	/* navbar */
	var lastScrollTop = 0;

	$(window).scroll(function(event) {
		var st = $(this).scrollTop();

		if(st > lastScrollTop) {
			// Scroll down
			$("nav").fadeOut();
		} else {
			// Scroll up
			$("nav").fadeIn().addClass("nav-up");
			if(st == 0) {
				$("nav").removeClass("nav-up");
			}
		}

		lastScrollTop = st;

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

	$(window).scroll(function() {
		if($(this).scrollTop() >= 200) {
			$(".dotstyle").fadeIn(200);
		} else {
			$(".dotstyle").fadeOut(200);
		}
	});

	$(".dotstyle a").click(function(event) {
		event.preventDefault();

		var $href = $($(this).attr("href"));

		$(this).addClass("is-active");
		$(this).parent().siblings().children().removeClass("is-active");
		$("body, html").animate({scrollTop: $href.offset().top - 30}, 500);
	});



});











