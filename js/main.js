$(document).ready(function() {

function ibg(){

	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();

	$('.menu__burger').click(function(event){
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
	$('.images-popup').magnificPopup({
		type: 'image',
	});


	
});