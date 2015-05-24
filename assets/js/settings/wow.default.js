jQuery(document).ready(function( $ ) {
    
    $('.classesToWow').addClass('wow fadeIn');

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
});