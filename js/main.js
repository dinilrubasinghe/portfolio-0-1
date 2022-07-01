$(document).ready(function () {
	let x = $(window).width();
	// alert(x);
	// alert("Welcome!");

	const hideText = $("#hideHeroText");
	hideText.addClass("hideHeroText");

	function HeroAdjust() {
		let defaultText = 'Cod<span class="hero-letters">e</span>.Design.';
		if ($(window).width() <= 869) {
			document.getElementById("tile2").textContent = "Code.";
			hideText.removeClass("hideHeroText");
		} else {
			document.getElementById("tile2").innerHTML = defaultText;
			hideText.addClass("hideHeroText");
		}
	}
	HeroAdjust();
	window.addEventListener("resize", HeroAdjust);

	$(".social-contain").waypoint(
		function (a) {
			$(".intro").addClass("animate__fadeInUp");
		},
		{ offset: "50%" }
	);
	$(".social-contain").waypoint(
		function (a) {
			$(".social-contain hr").addClass("animate__fadeInLeft");
		},
		{
			offset: "50%",
		}
	);
	$(".social-contain").waypoint(
		function (a) {
			$(".fa-instagram").addClass("animate___delay_3");
			$(".fa-instagram").addClass("animate__fadeIn");
			$(".fa-twitter").addClass("animate___delay_4");
			$(".fa-twitter").addClass("animate__fadeIn");
			$(".fa-pinterest").addClass("animate___delay_5");
			$(".fa-pinterest").addClass("animate__fadeIn");
			$(".fa-github").addClass("animate___delay_6");
			$(".fa-github").addClass("animate__fadeIn");
			$(".fa-flickr").addClass("animate___delay_7");
			$(".fa-flickr").addClass("animate__fadeIn");
			$(".fa-behance").addClass("animate___delay_7");
			$(".fa-behance").addClass("animate__fadeIn");
		},
		{
			offset: "50%",
		}
	);

	$(".project-tile").waypoint(
		function (a) {
			// $(".project-tile").addClass("animate__fadeIn");
			$(".card1").addClass("animate__fadeInUpBig");
		},
		{
			offset: "50%",
		}
	);

	$(".card1").waypoint(
		function (a) {
			$(".card2").addClass("animate__fadeIn", "animate__slow");
		},
		{
			offset: "20%",
		}
	);

	// HeroAdjust
	// if (Number(text) <= 686) {
	//   HeroAdjust;
	// }
});

// function viewForm(){
//   if (window.innerWidth <= 624) {
//     document.getElementById("tile4").textContent = "block";
//   } else {
//     document.getElementById("form").style.display = "none";
//   }
// };
