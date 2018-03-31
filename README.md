# babel-plugin-javascript



## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-javascript
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["javascript"]
}
```

### Via CLI

```sh
$ babel --plugins javascript script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["javascript"]
});
```
