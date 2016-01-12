/*!
 * Sticky header script v0.0.1
 * https://github.com/IamEmpty/sticky-header
 *
 * Also you need to use jQuery
 * http://jquery.com/
 *
 * Copyright 2015 IamEmpty
 * Released under the MIT license
 * https://github.com/IamEmpty/sticky-header/blob/master/LICENSE
 *
 * Date: 2015-03-26T15:11Z
 */


(function ($) {
	'use strict';

	$.fn.stickyHeader = function( options ) {

		var defaults = {
			fixedBlock: '.header_fixed',
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
