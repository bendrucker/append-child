# append-child [![Build Status](https://travis-ci.org/bendrucker/append-child.svg?branch=master)](https://travis-ci.org/bendrucker/append-child)

> Append an HTML element to the DOM and return a removal function


## Install

```
$ npm install --save append-child
```


## Usage

```js
var appendChild = require('append-child')
var div = document.createElement('div')

var removeDiv = appendChild(div)
//=> by default, div is appended to body

removeDiv()
//=> div is removed from body

//----------------------------------------------------

// you can also append to a custom element by passing the parent as a second argument...
var parentDiv = document.createElement('div');
var p = document.createElement('p');

var removeP = appendChild(p, parentDiv);
//=> p is appended to div

removeP()
//=> p is removed from div
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
