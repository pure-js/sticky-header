"use strict";

(function ($) {

	$.fn.stickyHeader = function( options ) {

		var defaults = {
			fixedBlock: '.new-post__main-text',
			offsetTop: 470,
			speed: 50
		};


		return this.each(function () {

			var settings = $.extend({}, defaults, options),
				$fixedBlock = $(settings.fixedBlock, this),
				speed = settings.speed,
				offsetTop = settings.offsetTop;

			// Hide on default
			$fixedBlock.hide();

			$(window).scroll(function() {

				if ( $(this).scrollTop() > offsetTop ) { // Show on scroll
					$fixedBlock.slideDown( speed );
				} else if ( $(this).scrollTop() <= offsetTop ) { // Hide on scroll
					$fixedBlock.slideUp( speed );
				}
			});
		});
	};
}(jQuery));
