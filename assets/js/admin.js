jQuery(document).ready(function( $ ) {
	
	$('pre').hide();

	$('p + p').css({
		cursor: 'pointer'
	}).html('View starter code').on('click', function(){
		$( this ).next().fadeToggle();
	})
});