const {program}=require('commander')

program
.version('1.1.0')
.description("Simple Pass Generator")


program
.command('generate')
.action(()=>{
    console.log("Generated")
})
.parse()