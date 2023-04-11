const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        let curDepth = 1;
        curDepth += this.calculateDepth(item);
        if (curDepth > maxDepth) maxDepth = curDepth;
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
