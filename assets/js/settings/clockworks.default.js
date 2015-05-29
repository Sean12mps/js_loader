/* 	
//addNode template
//-----------------
crk.addNode( {
	name 		: 'string',
	locations 	: [array],
	func_names 	: [array]
} );
//-----------------
//addFunction template
//-----------------
crk.addFunction( {
	name 		: 'string',
	selector 	: 'css_selector',
	func 	 	: function(){
		console.log( 'new function here.' );
	}
}, boolean );
//-----------------
//init template
//-----------------
crk.init( 'string' );
//-----------------