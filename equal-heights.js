/**
 * Equal Heights JS
 * 
 * @package equalheights
 * @version 1.0
 * @author brandonramone
 * @authorurl https://www.brandonramone.com/
 */


jQuery(document).ready( function($) {
	
	/* Equal heights with listner for window resizing * /
	function equalHeight(group) {
		var tallest = 0;
		group.each(function() {
			thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}

	// Set up and initialize
	function initEqualHeight(){
		// Set the elements to be affected (change these as needed)
		var els = [ 'element_name/id-1', 'element_name/id-2', '...' ];

		// Impact those elements
		for( i = 0; i < els.length; i ++ ){
			equalHeight( $( els[i] ) );
		}
	}
	initEqualHeight();

	$(window).resize(function(){
		setTimeout(function() {
			initEqualHeight();
		}, 100);
	});

});
