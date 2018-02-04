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


/************* SHIM ************************/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
/********************************************/
var canvas = document.getElementById('cvs'),
  ctx = canvas.getContext('2d'),
  height = canvas.height = document.body.offsetHeight,
  width = canvas.width = document.body.offsetWidth,
  collection = [],
  num_drops = 300, // number of drops
  gravity = 1.1, // gravity multiplier 
  windforce = 1, // yea i'd just leave this
  windmultiplier = 0, // this freaks out on large numbers
  maxspeed = 5, // this is so you never run too fast (it is a multiplier not raw)
  gutter = 0; // the percentage distance to travel off screen before wrapping

function Drop() {
  this.x;
  this.y;
  this.radius;
  this.distance;
  this.color;
  this.speed;
  this.vx;
  this.vy;
}
Drop.prototype = {
  constructor: Drop,
  
  random_x: function() {
    var n = width * (1 + gutter);
    return (1 - (1 + gutter)) + (Math.random() * n);
  },
  draw: function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  }
};

function draw_frame() {
  // this was recommended (see comments)
  // check it out, just comment out the 
  // ctx.clearRect(0, 0, width, height);
  // line and uncomment the three below:

  //ctx.globalCompositeOperation="darker";
  //ctx.fillStyle="rgba(0,0,0,0.5)";
  //ctx.fillRect(0,0,width,height);  
  ctx.clearRect(0, 0, width, height);
  
  // in a previous attempt I even go as far
  // as to ensure i'm drawing the furthest particles 
  // first for the z-index overlay.
  // in this run I felt it was unneeded
  collection.forEach(function (drop) {
    // costly but ultimatly I think it's worth it for now
    // I muck with the opacity to help with the illusion of depth
    ctx.globalAlpha = (drop.distance + 1) / 10; 
    drop.draw(ctx);
    ctx.globalAlpha = 1;
    drop.x += drop.vx;
    drop.y += drop.vy;
    var lx = drop.vx + windforce;
    lx < maxspeed && lx > 1 - maxspeed && (drop.vx = lx);
    if (drop.y > (drop.distance + 1) / 10 * height) {
      drop.y = Math.random() * -drop.radius * (num_drops / 10);
      drop.x = drop.random_x();
    }
    if (drop.x > width * (1 + gutter)) {
      drop.x = 1 - (width * gutter);
    }
    if (drop.x < 1 - (width * gutter)) {
      drop.x = width * (1 + gutter);
    }
  });
}

function animate() {
  requestAnimFrame(animate);
  draw_frame();
}

function windtimer() {
  // this is a super cheap way to do this,
  // i will need to look into how to properly 
  // emulate wind
  windforce = Math.random() > 0.5 ? windmultiplier : -windmultiplier;
  setTimeout(windtimer, Math.random() * (1000 * 30));
}

function init() {
  collection = [];
  while (num_drops--) {
    var drop = new Drop(); // todo: make constructor do this shit
    drop.color = "#FFFFFF";
    drop.distance = Math.random() * 10 | 0;
    drop.speed = Math.random() * (drop.distance / 10) + gravity;
    drop.vx = 0;
    drop.vy = Math.random() * drop.speed + (drop.speed / 2);
    drop.radius = (drop.distance + 1) / 16 * 3;
    drop.x = drop.random_x();
    drop.y = Math.random() * height;
    collection.push(drop);
  }
  windtimer();
  animate();
  window.onresize = function() {
    height = canvas.height = document.body.offsetHeight;
    width = canvas.width = document.body.offsetWidth;
  };
}
init();

 jQuery('document').ready( function (event) {

    var contentSlotConfig1 = {
        "sourceElement": jQuery('.creative-container'),
        "size": '2x1',
        "alignment": 'left'
    };

    contentSlotModule.createContentSlot(contentSlotConfig1);

    jQuery('.category-item').eq(6).before(jQuery('.creative-container'));

  });








