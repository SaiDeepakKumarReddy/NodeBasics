const fs=require("fs");
const path = require("path");

const filepath = path.join(__dirname, 'sample.txt');
console.log(filepath);

fs.readFile(filepath, 'utf-8',(error,contents)=>{
    if (error){
       console.log(error.message);
       return; 
    }
    console.log(contents.toString());
});