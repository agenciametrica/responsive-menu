//;(function() {


	// Support Var
	var scrollbarYPosition,
		isOpen 		= false,
		// DOM Caching
		menu			= document.getElementById('menu'),
		menuContainer	= document.getElementById('menu-container'),
		menuContent 	= document.getElementById('menu-content'),
		pageContainer	= document.getElementById('page-container');



	// Only attach EventListeners if supported
	if (window.addEventListener) {
		// Initialize FastClick to avoid the 300ms touch delay on touchscreen devices
		window.addEventListener('load', function() {
			 FastClick.attach(document.body);
		}, false);

		// Enable touch support if device supports
		if (Modernizr.touch) {
			document.addEventListener('touchstart', function(){}, true);
		}
	}

	// Bind toggle to menu button
	menu.onclick = function() {
		if (isOpen) {
			isOpen 						= false;
			menuContent.className 		= 'menu-up';
			pageContainer.style.display = 'block';
			window.scrollTo(0, scrollbarYPosition);
			menuContainer.style.position= 'fixed';
			// Attach transition end listener
			$('#menu-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
				function(e) {
					menuContainer.style.zIndex 	= '-1';
				}
			);
		} else {
			isOpen = true;
			menuContainer.style.zIndex 	= '1';
			menuContent.className 		+= 'menu-down';
			// Retrieve vertical scrollbar position
			scrollbarYPosition 		= window.pageYOffset || document.documentElement.scrollTop;
			// Attach transition end listener
			$('#menu-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
				function(e) {
					menuContainer.style.position 	= 'absolute';
					pageContainer.style.display 	= 'none';
					window.scrollTo(0, 0);
				}
			);
		}

	}

	// Test browser for CSS-Transitions support
	if (!Modernizr.csstransitions) {
		menuContainer.style.position	= 'absolute';
		menuContainer.style.marginTop	= '-100%';
		menu.style.position				= 'fixed';
		menu.style.marginTop			= '0px';

		$('#menu').click(function () {
			if (isOpen) {
				$('#menu-container').animate({marginTop: '0'},500, function() {
					pageContainer.style.display = 'none';
				});
			} else {
				$('#menu-container').animate({marginTop: '-100%'},500);
			}
		});
	}

//})();