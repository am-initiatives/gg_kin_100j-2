$('a[href*="#"]:not([href="#"])').click(function() {
	$('.dropdown-menu').click();
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
			scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

function AleaInt(a,b){return Math.floor(Math.random()*(b-a+1)+a)}
function aleasparkles(){
	return sparkles_config={
		fill: "rgba(255,255,255,0.5)",
		stroke:"rgba(255,255,255,0.8)",
		size: AleaInt(10,20),
		delay: AleaInt(1,2000),
		duration: AleaInt(100,3000),
		pause: AleaInt(1,2000)
	};
}
$('#sparkles').sparkle(aleasparkles()).sparkle(aleasparkles()).sparkle(aleasparkles()).sparkle(aleasparkles());