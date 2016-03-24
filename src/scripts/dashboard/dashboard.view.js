'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function() {
        this.render();
        console.log('!!!! test');
    },

    render: function() {
        $('#content').prepend('<p>App Boilerplate - Gobble, Babel, Browserify, Sass, Backbone v4</p>');
    }

});
