'use strict'

const rho = require('rho')

exports.name = 'rho'
exports.inputFormats = ['rho', 'markdown', 'md']
exports.outputFormat = 'html'

exports.render = rho.toHtml
exports.renderAsync = function (str) {
  return new Promise((resolve, reject) => {
    rho.render(str, (err, res) => {
      if (err) {
        return reject(err)
      }
      resolve(res)
    })
  })
}
