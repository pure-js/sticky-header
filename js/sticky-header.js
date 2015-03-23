"use strict";

(function ($) {

	$.fn.stickyHeader = function( options ) {

		var defaults = {
			fixedMenu: '.new-post__main-text',
			offsetTop: 470
		};


		return this.each(function () {

			var settings = $.extend({}, defaults, options),
				$fixedMenu = $(settings.fixedMenu, this),
				$offsetTop = settings.offsetTop;

			// Hide on start
			$fixedMenu.hide();

			$(window).scroll(function() {

				if ( $(this).scrollTop() > $offsetTop ) { // Show on scroll
					$fixedMenu.slideDown(50);
				} else if ( $(this).scrollTop() <= $offsetTop ) { // Hide on scroll
					$fixedMenu.slideUp(50);
				}
			});
		});
	};
}(jQuery));
