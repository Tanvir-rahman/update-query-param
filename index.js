/*!
 * does-property-exist <https://github.com/Tanvir-rahman/update-query-param>
 *
 * Copyright (c) 2021, Tanvir Rahman.
 * Released under the MIT License.
 */

'use strict';

function updateQueryParam ({ key, value, url }) {
  if (!url) url = window.location.href;
  let re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi');
  let hash;

  if (re.test(url)) {
    if (typeof value !== 'undefined' && value !== null) {
      return url.replace(re, '$1' + key + '=' + value + '$2$3');
    } else {
      hash = url.split('#');
      url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
        url += '#' + hash[1];
      }
      return url;
    }
  } else {
    if (typeof value !== 'undefined' && value !== null) {
      let separator = url.indexOf('?') !== -1 ? '&' : '?';
      hash = url.split('#');
      url = hash[0] + separator + key + '=' + value;
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
        url += '#' + hash[1];
      }
      return url;
    } else {
      return url;
    }
  }
}

module.exports = function ({ key, value, url }) {
  const updatedUrl = updateQueryParam({ key, value, url });
  window.history.pushState({ path: updatedUrl }, '', updatedUrl);
}
