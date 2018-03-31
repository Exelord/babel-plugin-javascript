# babel-plugin-javascript

This plugin will allow you to import all globals using js modules.
Thanks to that you will stop using non-explicit variables.

## Example

**In**

```js
import JavaScript from 'javascript';
import { Object } from 'javascript';
import Math from 'javascript/Math';
import { abs } from 'javascript/Math';

JavaScript.window;
new Object();
Math.round();
abs();
```

**Out**

```js
self.window;
new self.Object();
self.Math.round();
self.Math.abs();
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
