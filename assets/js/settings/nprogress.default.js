jQuery( window ).load( function() {
	if ( typeof NProgress != "undefined" ) {
   		NProgress.done();
	}
});

jQuery( document ).ready( function( $ ) {

	if ( typeof NProgress != "undefined" ) {
		NProgress.configure( { 
			ease: 'ease', speed: 1000,
			trickle: false,
			showSpinner: false,
			parent: ':not(.mobile) > #wrapper'
		} );
		NProgress.start();
	}
	
	// function to invoke for loaded image
	function imageLoaded() {
		if ( typeof NProgress != "undefined" ) {
			NProgress.inc();
		}
	}

	$( 'img' ).each(function() {
		if( this.complete ) {
			imageLoaded.call( this );
		} else {
			$(this).one( 'load', imageLoaded);
		}

	});
	
});