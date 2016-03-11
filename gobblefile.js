var gobble = require('gobble');

module.exports = gobble([
    gobble('src/root'),
    sassifyStyles('src/styles'),
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
