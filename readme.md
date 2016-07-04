# append-child [![Build Status](https://travis-ci.org/bendrucker/append-child.svg?branch=master)](https://travis-ci.org/bendrucker/append-child)

> Append an HTML element to the DOM and return a removal function


## Install

```
$ npm install --save append-child
```


## Usage

```js
var appendChild = require('append-child')
var element = document.createElement('div')

var remove = appendChild(element)
//=> div appended to document.body

remove()
//=> div removed from body

var parent = document.createElement('div')
remove = appendChild(element, parent)
//=> div appended to parent

remove()
//=> div removed from parent
```

## API

#### `appendChild(element, [parent])` -> `function`

Returns a `remove` function.

##### element

*Required*  
Type: `HTMLElement`

A DOM element to insert.

##### parent

Type: `HTMLElement`  
Default: `document.body`

The parent element to append to.


## License

MIT © [Ben Drucker](http://bendrucker.me)
