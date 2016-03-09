var gobble = require('gobble');

module.exports = gobble([
    gobble('src/root'),
    sassifyStyles('src/styles'),
    browserifyScripts('src/scripts')
]);

function sassifyStyles(sourceDir) {

    return gobble(sourceDir)
        .transform('sass', {
            src: 'main.scss',
            dest: 'styles/app.css'
        });

}

function browserifyScripts(sourceDir) {

    return gobble(sourceDir)
        .transform('browserify', {
            entries: 'app.js',
            dest: 'app.js',
            debug: true
        })
        .moveTo('scripts');

}
