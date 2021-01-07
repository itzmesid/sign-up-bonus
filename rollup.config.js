import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';

const copyConfig = {
  targets: [
	{ src: 'node_modules/@webcomponents', dest: 'signup-component/node_modules' },
	{ src: 'node_modules/lit-element', dest: 'signup-component/node_modules' },
  { src: 'index.html', dest: 'signup-component' },
  ],
};

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: './signup.js',
  output: {
    dir: 'signup-component/src/components',
    format: 'esm',
  },
  plugins: [
    minifyHTML(),
    copy(copyConfig),
    resolve(),
  ],
};

export default config;