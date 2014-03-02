'use strict';

/**
 * Creates an instance of `BackEnd`.
 *
 * @constructor
 * @api public
 */

function BackEnd() {
}

/**
 * Authorize request.
 *
 * This function must be overridden by subclasses.  In abstract form, it
 * always throws an exception.
 *
 * @param {Object} req The request to authorize.
 * @param {Object} action The action to perform.
 * @api public
 */

BackEnd.prototype.can = function(req, action) {
    throw new Error('BackEnd#can must be overridden by subclass');
};

/**
 * Set policy.
 *
 * This function must be overridden by subclasses.  In abstract form, it
 * always throws an exception.
 *
 * @param {Object} action The action to perform.
 * @param {Object} rule The rule(s) to evaluate.
 * @api public
 */

BackEnd.prototype.set_policy = function(action, rule) {
    throw new Error('BackEnd#set_policy must be overridden by subclass');
};

/**
 * Un-set policy.
 *
 * This function must be overridden by subclasses.  In abstract form, it
 * always throws an exception.
 *
 * @param {Object} action The action to perform.
 * @api public
 */

BackEnd.prototype.unset_policy = function(action) {
    throw new Error('BackEnd#unset_policy must be overridden by subclass');
};

/**
 * Serialize policies.
 *
 * This function must be overridden by subclasses.  In abstract form, it
 * always throws an exception.
 *
 * @param {Object} req The request to authorize.
 * @param {Function} callback The callback(err, permissions) when done.
 * @api public
 */

BackEnd.prototype.serialize = function(req, callback) {
    throw new Error('BackEnd#serialize must be overridden by subclass');
};

/**
 * Expose `BackEnd`.
 */

module.exports = BackEnd;