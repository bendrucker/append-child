'use strict'

var document = require('global/document')

module.exports = appendChild

function appendChild (element, parent) {
  parent = parent || document.body
  parent.appendChild(element)
  return function remove () {
    parent.removeChild(element)
  }
}
