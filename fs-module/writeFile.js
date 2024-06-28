const fs=require("fs");
const path = require("path");

const filepath = path.join(__dirname, "sample.txt");
console.log(filepath);

const contents= `   Writing to file is now easy`;
fs.writeFile(filepath,contents,{encoding:'utf-8', flag:'a+'}, (error, contents)=>{
     if(error){
        console.log(error.message);
     }
     console.log("File written successfull")
})