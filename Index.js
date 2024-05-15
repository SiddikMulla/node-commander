import { program } from 'commander'
import chalk from 'chalk'
import createPassword from './utils/createPassword.js'
const log = console.log

program
    .version('2.1.0')
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
log(chalk.red(generatedPassword));
