const {program}=require('commander')

program
.version('1.1.0')
.description("Simple Pass Generator")


program
.option('-l, --length <number>', 'length of password','8').parse()

console.log(program.opts());