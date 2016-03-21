var gobble = require('gobble');
var stylish = require('jshint-stylish');

module.exports = gobble([
    gobble('src/root'),
    sassifyStyles('src/styles'),
    jshint('src/scripts'),
    processScripts('src/scripts')
]);

function sassifyStyles(sourceDir) {

    return gobble(sourceDir)
        .transform('sass', {
            src: 'main.scss',
            dest: 'styles/app.css'
        });

}

function processScripts(sourceDir) {

    return gobble(sourceDir)
        .transform('babel', {
            sourceMaps: true
        })
        .transform('khazra-browserify', {
            entries: 'app.js',
            dest: 'app.js',
            debug: true
        })
        .moveTo('scripts');

}

function jshint(sourceDir) {

    return gobble(sourceDir)
        .observe('jshint', {
            accept: '.js',
            reportOnly: true,
            reporter: jshintStylish
        });

    function jshintStylish(reports) {
        reports.forEach(function(report) {

            var result;

            report.errors.map(function(el) {
                el.error = el;
                el.file = report.file;
            });

            result = stylish.reporter(report.errors);

            if (result) {
                console.log(result.trim());
            }

        });
    }

}
