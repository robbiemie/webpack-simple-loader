/**
 * 首字母大写 loader
*/
module.exports = function (value) {
  if (value) {
    value = `${value.split('')[0].toUpperCase()}${value.slice(1, value.length)}`
    console.log('--uppercase input value: ', value)
  }
  return value
}
