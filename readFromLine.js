const readLine=require('readline')

const rl=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Please Enter your Name: ",(Answer)=>{
    console.log("Hello "+Answer)
    rl.close()
})