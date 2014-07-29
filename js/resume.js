$(document).ready(function() {
	$('#nav').onePageNav({
	scrollOffset: 30
	});
	


$('[data-zlname = test2]').mateHover({
	position: 'y',
	overlayStyle: 'rolling',
	overlayBg: '#fff',
	overlayOpacity: 0.7,
	overlayEasing: 'easeOutCirc',
	rollingPosition: 'top',
	popupEasing: 'easeOutBack',
	popup2Easing: 'easeOutBack'
});

$('[data-zlname = test3]').mateHover({
	position: 'x+i',
	overlayStyle: 'rolling',
	overlayBg:'#e13030',
	overlayOpacity: 0.6,
	overlayEasing: 'easeOutCirc',
	rollingPosition: 'bottom'
	
});

$(".ViewImage").colorbox({ rel: 'group1', transition: "none", innerWidth: '800px' }); 
$(".ViewImage2").colorbox({ rel: 'group2', transition: "none", innerWidth: '800px' }); 
	
});