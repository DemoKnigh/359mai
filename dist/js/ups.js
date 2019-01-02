var upsSwiper = new Swiper('.swiper-container', {
	speed: 1000,
	longSwipes: false,
	loop: true,
	autoplay: {
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});

