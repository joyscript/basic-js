const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = n.toString().split('');
  let max = 0;

  arr.forEach((item, ind) => {
    let temp = [...arr];
    temp.splice(ind, 1);
    let curMax = +temp.join('');
    if (curMax > max) max = curMax;
  });

  return max;
}

module.exports = {
  deleteDigit,
};
