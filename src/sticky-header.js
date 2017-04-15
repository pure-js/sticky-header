/*!
 * Sticky header script v0.1.2
 * https://github.com/pure-js/sticky-header
 *
 * Released under the MIT license
 * https://github.com/pure-jsy/sticky-header/blob/master/LICENSE
 */

function stickyHeader({
  $el = document.querySelector('.header-fixed'),
  offsetTop = 470,
  hideClass = 'hidden'
}) {
  // Hide by default
  hideClass ? $el.classList.add(hideClass) : $el.style.display = 'none';

  window.addEventListener('scroll', function() {
    const scrollTop = document.body.scrollTop;
    if (scrollTop > offsetTop) {
      $el.classList.add(hideClass);
    } else {
      $el.classList.remove(hideClass);
    }
  });
}
