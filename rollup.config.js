import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';

export default [{
    input: 'dist/index.js',
    output: {
        name: 'Mekuteriya',
        file: pkg.browser,
        format: 'life',
        sourcemap: true,
    },
    plugin: [
        resolve(),
        commonjs(),
        minify({ comments: false })
    ]
}]