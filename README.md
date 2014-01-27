Responsive Menu
==================

A responsive menu with transitions and fallback support for older browsers.
This menu works sliding down the content with a background mask that adjusts to screen height.

Live Demo
----------
See it in action: http://agenciametrica.com.br/_labs/responsive-menu

Features
----------
- Responsive
- Works with a mask
- Supports scrollbar if content size is bigger than screen size
- Primarily uses CSS-Transitions and then jQuery as fallback for older browsers.

Supported Browsers
----------
- IE8+
- Firefox
- Safari
- Chrome
- Chrome mobile
- Safari mobile


Documentation
-------------

#### CSS
- Using hardware acceleration whenever possible: `translateZ(0)`

### Javascript
- This menu uses Zepto with jQuery as fallback (soon will be converted to Vanilla.js)
- When menu opens JS stores vertical scrollbar position to keep tracking of user position on the page. When it is closed, we assure user will see the content he was consuming before the menu has opened.

-------------

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/agenciametrica/responsive-menu/trend.png)](https://bitdeli.com/free "Bitdeli Badge")