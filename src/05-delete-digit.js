/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStrins = '' + n;
  const arr = [];
  for (let i = 0; i < nStrins.length; i++) {
    arr.push(parseInt(nStrins.substring(0, i) + nStrins.substring(i + 1), 10));
  }
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

module.exports = deleteDigit;
