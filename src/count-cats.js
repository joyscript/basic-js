const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  return matrix.flat().filter((item) => item === '^^').length;
}

module.exports = { countCats };
