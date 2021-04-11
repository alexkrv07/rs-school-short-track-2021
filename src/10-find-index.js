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
  // let mid = Math.floor((end - begin) / 2);

  // while (begin !== end) {
  //   if (array[mid] === value) {
  //     return mid;
  //   }
  //   if (array[mid] < value) {
  //     begin = mid + 1;
  //     // return mid + findIndex(array.slice(begin, end), value);
  //   } else {
  //     end = mid;
  //   }
  //   mid = Math.floor((end - begin) / 2);
  // }
  // return -1;
  // end = mid;
  // return array[mid];
  throw new Error('Not implemented');
}

module.exports = findIndex;
