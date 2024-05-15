import { program } from 'commander'
import chalk from 'chalk'
import clipboard from 'clipboardy'
import createPassword from './utils/createPassword.js'
import savePassword from './utils/savePassword.js'
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

//Save Password to .txt
if (save) {
    savePassword(generatedPassword)
}
//Copy to Clipboard
clipboard.writeSync(generatedPassword);

//Print Generated Password Here
log(chalk.yellow(chalk.bold("Generated Password: ")) + chalk.red(chalk.bold(generatedPassword)));

log(chalk.green("Copied to Clipboard"));