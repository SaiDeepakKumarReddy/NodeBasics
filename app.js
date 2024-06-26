console.log("---- First Node -----")
function add(num){
    console.log("you said:" + num)
}
add(1221)

console.log("----- Module-----")
console.log(module)

console.log("----- Loading Module (Logger.js) -----")
const logger1= require("./logger");
//logger1.login("Hey I am function called in logger.js")


console.log("----- Path Module -----")
const path = require('node:path');
var PathObj= path.parse(__filename)
console.log(PathObj);

console.log("----- OS Module -----")
const os = require('node:os');
var totalMemory=os.totalmem()
var freeMemory= os.freemem()
//console.log("Total Memory: "+totalMemory)
//console.log("Free Memory: " + freeMemory)
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

console.log("----- FS Module -----")
const fs = require('node:fs');
//const files=fs.readdirSync('./');
//console.log(files)
fs.readdir('./',function(err,files){
    if (err) console.log("Error",err) ;
    else console.log("Files",files)
});

console.log("----- Event Module -----")
const EventEmitter = require('node:events');

const Logger=require('./logger');
const logger=new Logger();
logger.on("messageLogged", (arg)=>{
    console.log('Listener called', arg);
});
logger.log('Message');

console.log("----- HTTP Module -----")
const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }
});
server.listen(3000);
console.log('Listening on POrt 3000.....')