const { program } = require('commander')
const createPassword=require("./utils/createPassword")
const log = console.log
program
    .version('1.1.0')
    .description("Simple Pass Generator")


program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'Save as Password.txt')
    .option('-nn, --no-number', 'remove Numbers')
    .option('-ns, --no-symbols', 'remove Symbols')
    .parse()

const { length, save, number, symbols } = program.opts();

//Logic to generate Password
const generatedPassword = createPassword(length, number, symbols)


//Print Generated Password Here
log(generatedPassword);
