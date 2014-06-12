
jQuery(document).ready(function($) {

  // SVGMagic calls MUST BE FIRST THING CALLED!
	$("img").svgmagic();
	
	$(".svgBgImage").svgmagic({
        backgroundimage: true
  });



  // Placeholder polyfill init
  $('input, textarea').placeholder();
  
  
  
  // Custom Checkboxes and Radios for forms
  $(function(){
  	$( document ).bind( "enhance", function(){
  		$( "body" ).addClass( "enhanced" );
  	});
  
  	$( document ).trigger( "enhance" );
  });
	
  	   	 
    
  
});
