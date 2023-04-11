const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  const repeatStr = (str, times, sep) => (String(str) + sep).repeat(times > 1 ? times : 1).slice(0, -sep.length);

  const repAddition = addition === undefined ? '' : repeatStr(addition, additionRepeatTimes, additionSeparator || '|');

  return repeatStr(str + repAddition, repeatTimes, separator || '+');
}

module.exports = {
  repeater,
};
