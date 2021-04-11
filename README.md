# update-query-param

A [Node.js](https://nodejs.org/) module which update query param of url from location bar with given value.

## Installation

```bash
npm install update-query-param --save
```

**Params:**
Object which needs -
* key - Key to update
* value - Value to update
* url - url to update [Default current url]

## Usage

Assume we have a query string with a value of:

```javascript
"?color=red";
```

### Configuring

```javascript
const updateQueryParam = require('update-query-param')

updateQueryParam({ 
  key: 'color',
  value: 'blue',
}); // ?color=blue
```

### License

Copyright © 2021, [Tanvir Rahman](https://github.com/Tanvir-rahman).
Released under the [MIT License](LICENSE).

***