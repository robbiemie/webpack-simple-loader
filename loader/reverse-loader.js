const chalk = require('chalk')
/**
 *  字母反转 loader
*/
module.exports = function (value) {
  if (value) {
    value = value.split('').reverse().join('')
    console.log(chalk.yellow(`--reverse-loader input: ${value}`))
  }
  return value
}
