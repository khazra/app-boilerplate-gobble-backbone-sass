var $ = require('jquery-browserify');

var header = $('header').find('h1');

header.text(header.text().replace(/o/g, 'u'));
babelTest();

function babelTest() {

    var test = true, testLet;

    if (test) {

        let testLet = 'let';
        $('<p></p>').appendTo(header).text(`testLet is ${testLet}`);

        console.log('testLet should be defined', {
            testLet: testLet
        });

    }

    testLet = testLet || void 0;

    $('<p></p>').appendTo(header).text(`testLet is ${testLet}`);

    console.log('testLet be undefined', {
        testLet: testLet
    });

}
