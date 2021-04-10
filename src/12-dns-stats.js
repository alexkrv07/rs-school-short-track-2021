/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const separator = '.';
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    let nextsearch = domains[i];
    let index = nextsearch.lastIndexOf(separator);
    let subdomain = '';
    while (index >= 0) {
      subdomain += nextsearch.substring(index);
      if (result[subdomain]) {
        result[subdomain]++;
      } else {
        result[subdomain] = 1;
      }
      nextsearch = nextsearch.substring(0, index);
      index = nextsearch.lastIndexOf(separator);
    }
    subdomain += separator + nextsearch;
    if (result[subdomain]) {
      result[subdomain]++;
    } else {
      result[subdomain] = 1;
    }
  }
  return result;
  // throw new Error('Not implemented');
}

module.exports = getDNSStats;
