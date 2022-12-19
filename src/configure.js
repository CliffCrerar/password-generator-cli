// Configure app
const readline = require('readline')
const Configuration = require('./create-new-config');
const config = new Configuration();

readline.createInterface().createInterface({
    input: process.stdin,
    output: process.stdout
});



readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});