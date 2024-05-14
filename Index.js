const {program}=require('commander')

program
.version('1.1.0')
.description("Simple Pass Generator")


program
.option('-l, --length <number>', 'length of password','8')
.option('-s, --save', 'Save as Password.txt')
.option('-nn, --no-number', 'remove Numbers')
.option('-ns, --no-symbols', 'remove Symbols')
.parse()

console.log(program.opts());