// Configure app
const {createInterface} = require('readline')
const config = require('./config-constructor');
// console.log('config: ', config.configKeys);


const {stdin: input,stdout: output} = process
const readline = createInterface({input,output});

console.log('output: ', output);
console.log('input: ', input);


function askQuestion(configParameter,callback) {

}

function runInteractiveConfiguration() {
    // if(config.configExists) return;
    const configKeys = config.configKeys;
    // console.log('configKeys: ', configKeys);
    // console.log(config);
    const promises = []
    configKeys.forEach(key=>{
        console.log('key: ', key);
        // .push(new Promise((resolve,reject) => {
    const question = `${config[key].question}, default ${config[key].value}:`
    console.log('question: ', question);
    promises.push(new Promise((resolve,reject)=>{
        try {
            readline.question(question, answer => resolve(answer));
        } catch(err) {
            reject(err);
        }
    }))

    }) 

    Promise.all(promises).then(result=>{
        console.log('result: ', result);
    })
}

runInteractiveConfiguration()