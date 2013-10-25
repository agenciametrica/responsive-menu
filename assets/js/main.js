
;(function() {

	//HACK TO DONT RUN IN IE6 - dont needs
	if (window.addEventListener) {
		//INITIALIZING FASTCLICK
		//Polyfill to remove click delays on browsers with touch UIs.
		window.addEventListener('load', function() {
			 FastClick.attach(document.body);
		}, false);

		//OPTIMIZATION FOR TOUCH DEVICES
		document.addEventListener("touchstart", function(){}, true);
	}



	//MENU TOGGLE
	var y,
		menu		= document.getElementById('menu'),
		container	= document.getElementById('menu-container'),
		content 	= document.getElementById('menu-content'),
		page		= document.getElementById('page-container'),
		isOpen 		= false;



	//MENU
	menu.onclick = function() {
		if (isOpen) {
			isOpen = false;


			page.style.display = 'block';
			content.className = "menu-up";
			window.scrollTo(0, y);

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
			container.style.zIndex = "0";
			content.className += "menu-down";

			//Capture the user's scrollY
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
			//verifica se o menu está aberto
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