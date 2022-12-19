/**
 * Main
 */
const config = require('./src/config.json');
const pw = require('generate-password')

console.log(pw.generate(config))