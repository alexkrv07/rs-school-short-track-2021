/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  // function countCharacters(str) {
  //   const temp = {};
  //   for (let i = 0; i < str.length; i++) {
  //     if (!temp[str[i]]) {
  //       temp[str[i]] = 1;
  //     } else {
  //       temp[str[i]]++;
  //     }
  //   }
  //   return temp;
  // }
  // const temp1 = countCharacters(s1);
  // const temp2 = countCharacters(s2);

  // let sum = 0;
  // for (let key in temp1) {
  //   if (key in temp2) {
  //     sum += temp1[key] < temp2[key] ? temp1[key] : temp2[key];
  //   }
  // }
  // return sum;
  throw new Error('Not implemented');
}

module.exports = getCommonCharacterCount;
