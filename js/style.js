const slider = tns({
	container: '.films__list',
	items: 4,
	slideBy: 'page',
	mouseDrag: true,
	autoplay: true,
	loop: true,
	speed: 5000,
	controlsContainer: '.container-controllers',
	autoplayButtonOutput: false,
	autoplayTimeout: 6000,
});
