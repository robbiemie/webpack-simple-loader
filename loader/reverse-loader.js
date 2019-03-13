/**
 *  字母反转 loader
*/
module.exports = function (value) {
  if (value) {
    value = value.split('').reverse().join('')
    console.log('--reverse-loader input:', value)
  }
  return value
}
