const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        require('autoprefixer'),
        purgecss({
            content: ['./_site/**/*.html', './_site/**/*.js']
        }),
        cssnano({ preset: 'default', })
    ],
};