;(function() {

	//HACK TO DONT RUN IN IE6 - dont needs
	if (window.addEventListener) {
		//initializing fastclick
		//Polyfill to remove click delays on browsers with touch UIs.
		window.addEventListener('load', function() {
			 FastClick.attach(document.body);
		}, false);

		//optimization for touch devices
		document.addEventListener("touchstart", function(){}, true);
	}



	//VARIABLES
	var y,
		menu		= document.getElementById('menu'),
		container	= document.getElementById('menu-container'),
		content 	= document.getElementById('menu-content'),
		page		= document.getElementById('page-container'),
		isOpen 		= false;



	//MENU TOGGLE
	menu.onclick = function() {
		if (isOpen) {
			isOpen = false;

			content.className = "menu-up";
			page.style.display = 'block';
			window.scrollTo(0, y);
			container.style.position = 'fixed';

			//When transition ends
			$('#menu-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
				function(e) {
					//Verify if menu's was clicked 2 times without ends the transition
					if (isOpen == false) {
						container.style.zIndex = "0";
					}
				}
			);
		} else {
			isOpen = true;
			container.style.zIndex = "1";
			content.className += "menu-down";

			//get user's scrollY
			y = window.pageYOffset || document.documentElement.scrollTop;

			$('#menu-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
				function(e) {
					//Verify if menu's was clicked 2 times without ends the transition
					if (isOpen == true) {
						page.style.display = 'none';
						container.style.position = 'absolute';
						window.scrollTo(0, 0);
					}
				}
			);
		}
	}



	//IF BROWSER DONT SUPPORTS CSS TRANSITIONS
	if (!Modernizr.csstransitions) {
		container.style.position	= 'absolute';
		container.style.marginTop	= '-100%';
		menu.style.position			= 'fixed';
		menu.style.marginTop		= '0px';

		$('#menu').click(function () {
			if (isOpen) {
				$('#menu-container').animate({marginTop: '0'},500, function() {
					page.style.display = 'none';
				});
			} else {
				$('#menu-container').animate({marginTop: '-100%'},500);
			}
		});
	}

})();