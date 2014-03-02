# abac-backend

An abstract class implementing [ABAC](https://github.com/vovantics/abac/)'s back-end API.

## Install

    $ npm install abac-backend

## Usage

This module exports an abstract `BackEnd` class that should be extended and implemented. The subclassed back-end can be used in applications that use ABAC middleware for authorization (via ABAC).

#### Subclass BackEnd

Create a new `CustomBackEnd` constructor which inherits from `BackEnd`:

```javascript
var util = require('util'),
    BackEnd = require('abac-backend');

function CustomBackEnd(...) {
  BackEnd.call(this);
}

util.inherits(CustomBackEnd, BackEnd);
```

#### Implementing can()

`can()` is a high order function that calls a `yes()` or `no()` function after executing a Policy's Rules on the Subject (`request`).

```javascript
BackEnd.prototype.can = function(req, action, options) {
  // Can request perform action?
}
```

#### Implementing serialize()

`serialize()` is a high order function that returns a `callback(err, permissions)` function, where permissions is a JavaScript object that maps actions to a boolean value.

```javascript
BackEnd.prototype.serialize = function(req, callback) {
  // Return the permissions for the Subject (`req`).
}
```

#### Implementing set_policy()

`set_policy()` is a function that upserts a policy represented as a key-value pair, where the key is the action and the value is the rule.

```javascript
BackEnd.prototype.set_policy = function(action, rule) {
  // Upsert action and rule.
}
```

## Tests

    $ npm install
    $ npm test

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Stevo <[http://github.com/vovantics/](http://github.com/vovantics/)>

