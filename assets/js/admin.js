jQuery(document).ready(function( $ ) {
	
	$('.jsl-example').hide();

	$('.jsl-default-setting-toggle').css({
		cursor: 'pointer'
	}).html('View starter code').on('click', function(){
		$( this ).next('.jsl-example').fadeToggle();
	})

});