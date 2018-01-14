/* navbar */

var lastScrollTop = 0;

$(window).scroll(function(event) {
	var st = $(this).scrollTop();

	if(st > lastScrollTop) {
		// Scroll down
		$('nav').fadeOut().removeClass('nav-up');
	} else {
		// Scroll up
		$('nav').fadeIn().addClass('nav-up');
	}

	lastScrollTop = st;
});



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