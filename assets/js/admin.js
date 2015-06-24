jQuery( document ).ready( function( $ ) {
	
	$('.jsl-example').hide();

	$('.jsl-default-setting-toggle').css({
		cursor: 'pointer'
	}).html('View starter code').on('click', function(){
		$( this ).next('.jsl-example').fadeToggle();
	})

	$.ajax( {
	    // url: "http://endpoint.cl0ckw0rks.com/?json=get_recent_posts",
	    url: "http://endpoint.cl0ckw0rks.com/js-loader",
	 
	    // The name of the callback parameter, as specified by the YQL service
	    jsonp: "callback",
	 
	    // Tell jQuery we're expecting JSONP
	    dataType: "jsonp",
	 
	    // Tell YQL what we want and that we want JSON
	    data: {
	        cmd: "get_cdn_list",
	        format: "json"
	    },
	 
	    // Work with the response
	    success: function( response ) {
	        console.log( response ); // server response
	    }
	} );

} );