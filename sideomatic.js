
(function($) {
	jQuery.fn.sideomatic = function(options) {
		var state = 0;
		//Default values 
		var defaults={
			menuColor : '#333',
			menuText: '#fff',
			titleColor:'#2a2a2a',
			titleText: '#fff',
			linkBorderColor: '#2a2a2a',
			linkText: '#fff',
			linkOver: '#fff',
			buttonColor: '#333',
			buttonText:'#fff',
			onlyOne: false
		};
    
		//If the user doesn’t set options,set the default values
		var settings = $.extend({}, defaults, options);

		return this.each(function(){

				//Customizable colors and text
				$(".side-menu ").css({"background-color": settings.menuColor,"color" :settings.menuText});
				$(".title").css({"background-color": settings.titleColor,"color" :settings.titleText});
				$(".side-menu li").css({"border": "1px solid","border-color" :settings.linkBorderColor});
				$(".side-menu a").css("color", settings.linkText);
				$(".menu").css({"color":settings.buttonText,"background-color": settings.buttonColor});
				
				//Menu links, when the mouse it's over the links, change the border color, change the font size and add a thick left border.
				$(".side-menu li").hover(function(){
					$(this).stop().animate({'border-left-width': "5",'font-size': '20'},0.300);
					$(this).css("border-color",settings.linkOver);	
				},
				function(){
					$(this).stop().animate({'border-left-width': "0",'font-size': '16'},0.100);
					$(this).css("border-color",settings.linkBorderColor);

				});
				//If two images ares used to display the menu
				if(!settings.onlyOne){
					
					$(".menu").click(function(){
						//Content and images movement - Display the side menu
						$(".side-menu").animate({ width: 'show'},800);
						if(state != 1){
							$(".menu").animate({ "left": "+=250px",".menu-bar":'fadeOut'},800,
								function(){
									$(".menu-left").fadeIn(500);
								});
							$(".content").animate({ "left": "+=250px", "opacity": 0.8 }, 800 );		 
							state=1;
						} 
						else
						{
							//Content and images movement - Hide the side menu
							$(".side-menu").animate({ width: 'hide'},800);
							//$(".menu").animate({ "left": "-=250px",".menu-left":'hide'},800,
                            $(".menu").animate({"left": "-=250px"},800,function(){
                                $(".menu-left").fadeOut(500);
                                $(".menu-bar").fadeIn(500);
                            });
							//	function(){
							//		$(".menu-bar").fadeIn(500);
							//	});
							$(".content").animate({ "left": "-=250px","opacity": 1 }, 800 );
							state=0;
						}
					});
				}
				//If only one image is used to display the menu
				else
				{
					$(".menu").click(function(){
						//Content and image movement - Display the side menu
						$(".side-menu").animate({ width: 'show'},800);
						if(state != 1){
							$(".menu").animate({ "left": "+=250px"},800);
							$(".content").animate({ "left": "+=250px", "opacity": 0.8 }, 800 );		 
							state=1;
						} 
						else
						{
							//Content and images movement - Hide the side menu
							$(".side-menu").animate({ width: 'hide'},800);
							$(".menu").animate({ "left": "-=250px"},800);
							$(".content").animate({ "left": "-=250px","opacity": 1 }, 800 );
							state=0;
						}
					});
				}
			
		});
	};
})(jQuery);

