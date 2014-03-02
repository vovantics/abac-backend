/*global describe: false, it: false */

var BackEnd = require('../lib/backend'),
    chai = require('chai'),
    expect = chai.expect;

describe('BackEnd', function() {

    var backend = new BackEnd();

    it('authenticate should throw error', function() {
        expect(function() {
            backend.can();
        }).to.throw(Error, 'BackEnd#can must be overridden by subclass');
    });

});