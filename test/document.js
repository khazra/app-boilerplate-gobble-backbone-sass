var should = require('should');
var sinon = require('sinon');
var jsdom = require('mocha-jsdom');
jsdom();

describe('mocha', function() {

    it('has document', function() {
        var div = document.createElement('div')
        div.nodeName.should.equal('DIV');
    });

});
