/*!
 * Sticky header script v0.1.2
 * https://github.com/pure-js/sticky-header
 *
 * Released under the MIT license
 * https://github.com/pure-jsy/sticky-header/blob/master/LICENSE
 */

function stickyHeader({
  el = document.querySelector('.header_fixed'),
  offsetTop = 470,
  hideClass = 'hidden',
} = {}) {
  const $el = el;
  // Hide by default
  if (hideClass) {
    $el.classList.add(hideClass);
  } else {
    $el.style.display = 'none';
  }

  window.addEventListener('scroll', () => {
    const { scrollTop } = document.body;
    if (scrollTop > offsetTop) {
      $el.classList.add(hideClass);
    } else {
      $el.classList.remove(hideClass);
    }
  });
}
