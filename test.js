'use strict'

var test = require('tape')
var document = require('global/document')
var toArray = require('to-array')
var append = require('./')

test('document.body', function (t) {
  var div = document.createElement('div')
  var remove = append(div)
  t.deepEqual(last(document.body.childNodes), div, 'has div child')
  remove()
  t.notEqual(last(document.body.childNodes), div, 'deleted div')
  t.end()
})

test('custom destination', function (t) {
  var parent = document.createElement('div')
  var child = document.createElement('div')
  var remove = append(child, parent)
  t.deepEqual(toArray(parent.childNodes), [child], 'has div child')
  remove()
  t.deepEqual(toArray(parent.childNodes), [], 'has no children')
  t.end()
})

function last (nodeList) {
  return nodeList[nodeList.length - 1]
}
