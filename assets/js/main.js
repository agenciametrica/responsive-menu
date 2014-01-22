//;(function() {


	// Support Var
	var scrollbarYPosition,
		isOpen 		= false,
		// DOM Caching
		menu		= document.getElementById('menu'),
		container	= document.getElementById('menu-container'),
		content 	= document.getElementById('menu-content'),
		page		= document.getElementById('page-container');



	// Only attach EventListeners if supported
	if (window.addEventListener) {
		// Initialize FastClick to avoid the 300ms touch delay on touchscreen devices
		window.addEventListener('load', function() {
			 FastClick.attach(document.body);
		}, false);

		// Enable touch support if device supports
		if (Modernizr.touch) {
			document.addEventListener("touchstart", function(){}, true);
		}

		// Attach transition end listener
		$('#menu-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
			function(e) {
				if (isOpen == true) {
					container.style.position 	= 'absolute';
					page.style.display 			= 'none';
					window.scrollTo(0, 0);
				} else {
					container.style.zIndex 		= "0";
				}
			}
		);
	}

	// Bind toggle to menu button
	menu.onclick = function() {
		if (isOpen) {
			isOpen 					= false;
			content.className 		= "menu-up";
			page.style.display 		= 'block';
			window.scrollTo(0, scrollbarYPosition);
			container.style.position= 'fixed';
		} else {
			isOpen = true;
			container.style.zIndex 	= "1";
			content.className 		+= "menu-down";
			// Retrieve vertical scrollbar position
			scrollbarYPosition 		= window.pageYOffset || document.documentElement.scrollTop;
		}

	}

	// Test browser for CSS-Transitions support
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

//})();