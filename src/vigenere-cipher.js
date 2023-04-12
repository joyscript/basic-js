const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  getResult(mes, key, type) {
    if (!(mes && key)) throw new Error('Incorrect arguments!');

    let arr = [];
    for (let i = 0; i < 26; i++) arr.push(String.fromCharCode(i + 65));

    if (key.length < mes.length) key = key.repeat(Math.ceil(mes.length / key.length));

    let res = '';

    for (let i = 0; i < mes.length; i++) {
      if (arr.includes(mes[i].toUpperCase())) {
        let mesInd = arr.indexOf(mes[i].toUpperCase());
        let keyInd = arr.indexOf(key[0].toUpperCase());
        res += arr[(type === 'encr' ? mesInd + keyInd : mesInd - keyInd + 26) % 26];
        key = key.slice(1);
      } else {
        res += mes[i];
      }
    }
    return this.isDirect ? res : res.split('').reverse().join('');
  }

  encrypt(mes, key) {
    return this.getResult(mes, key, 'encr');
  }

  decrypt(mes, key) {
    return this.getResult(mes, key, 'decr');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
