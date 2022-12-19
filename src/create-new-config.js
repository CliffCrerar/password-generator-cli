const {existsSync} = require('fs');
const {resolve} = require('path');

const configPath = resolve(__dirname, 'config.json');

console.log('configPath: ', configPath);

function Question(question) {
    this.question = question;
    this.value;
}

function Configuration() {

    const configValue = existsSync(configPath) ? require('./config.json') : null;

    this.length = new Question('Length of the generated password')
    /**
     * Should the password include numbers
     * @default false
     */
    this.numbers = new Question('Should the password include numbers')
    /**
     * Should the password include symbols, or symbols to include
     * @default false
     */
    this.symbols = new Question('Should the password include numbers')
    /**
     * Should the password include lowercase characters
     * @default true
     */
    this.lowercase = new Question('Should the password include lowercase characters')
    /**
     * Should the password include uppercase characters
     * @default true
     */
    this.uppercase = new Question('Should the password include uppercase characters')
    /**
     * Should exclude visually similar characters like 'i' and 'I'
     * @default false
     */
    this.excludeSimilarCharacters = new Question(`Should exclude visually similar characters like 'i' and 'I'`)
    /**
     * List of characters to be excluded from the password
     * @default ""
     */
    this.exclude = new Question('List of characters to be excluded from the password')
    /**
     * Password should include at least one character from each pool
     * @default false
     */

    this.strict = new Question('Password should include at least one character from each pool')
}

module.exports = Configuration;