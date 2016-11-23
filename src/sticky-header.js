/*!
 * Sticky header script v0.1.2
 * https://github.com/pure-js/sticky-header
 *
 * Released under the MIT license
 * https://github.com/pure-jsy/sticky-header/blob/master/LICENSE
 */


function stickyHeader() {
  'use strict';

  const defaults = {
    fixedBlock: '.header_fixed',
    offsetTop: 470,
    speed: 50,
    hideClassIsExist: true
  };

  return this.each(function () {

    const settings = $.extend({}, defaults, options),
      $fixedBlock = $(settings.fixedBlock, this),
      el = document.querySelectorAll(settings.fixedBlock),
      speed = settings.speed,
      offsetTop = settings.offsetTop,
      hideClassIsExist = settings.hideClassIsExist;

    // Hide by default
    hideClassIsExist ? el.classList.add('hide') : el.style.display = 'none';

    $(window).scroll(function() {
      if ( $(this).scrollTop() > offsetTop ) { // Show on scroll
        $fixedBlock.slideDown( speed );
      } else if ( $(this).scrollTop() <= offsetTop ) { // Hide on scroll
        $fixedBlock.slideUp( speed );
      }
    });
  });
}
