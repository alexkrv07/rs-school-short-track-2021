/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(/* array, value */) {
  // let begin = 0;
  // let end = array.length;
  // const mid = Math.floor((end - begin) / 2);
  // if (array[mid] === value) {
  //   return mid;
  // }
  // if (array[mid] < value) {
  //   begin = mid;
  //   return mid + findIndex(array.slice(begin, end), value);
  // }
  // end = mid;
  // return findIndex(array.slice(begin, end), value);
  throw new Error('Not implemented');
}

module.exports = findIndex;
