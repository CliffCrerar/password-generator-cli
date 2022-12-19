const {existsSync} = require('fs');
const {resolve} = require('path');
const {keys} =require('lodash')

const configPath = resolve(__dirname, 'config.json');

console.log('configPath: ', configPath);

function validateConfig(config) {

}

function assignExistingConfig(self) {
    if(!self.configExists) return;
    const config = require('./config.json')
    keys(config).forEach(key=>self[key].value = config[key]);
}

function Question(question, defaultValue) {
    this.question = question;
    this.value = defaultValue;
}

function Configuration() {

    this.length = new Question('Length of the generated password', 10)
    /**
     * Should the password include numbers
     * @default false
     */
    this.numbers = new Question('Should the password include numbers', false)
    /**
     * Should the password include symbols, or symbols to include
     * @default false
     */
    this.symbols = new Question('Should the password include symbols, or indicate symbols include', false)
    /**
     * Should the password include lowercase characters
     * @default true
     */
    this.lowercase = new Question('Should the password include lowercase characters', true)
    /**
     * Should the password include uppercase characters
     * @default true
     */
    this.uppercase = new Question('Should the password include uppercase characters', true)
    /**
     * Should exclude visually similar characters like 'i' and 'I'
     * @default false
     */
    this.excludeSimilarCharacters = new Question(`Should exclude visually similar characters like 'i' and 'I'`, false)
    /**
     * List of characters to be excluded from the password
     * @default ""
     */
    this.exclude = new Question('List of characters to be excluded from the password',''), 
    /**
     * Password should include at least one character from each pool
     * @default false
     */

    this.strict = new Question('Password should include at least one character from each pool',false)

    assignExistingConfig(this);
}


Configuration.prototype.configKeys = keys(new Configuration());
Configuration.prototype.validateConfig = validateConfig;
Configuration.prototype.configExists = existsSync(configPath);

module.exports = new Configuration();