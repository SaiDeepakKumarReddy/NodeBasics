const EventEmitter = require('node:events');
console.log(__filename);
console.log(__dirname);3
var url ='http://myloginsite.io';

class Logger extends EventEmitter{
        log(message){
        console.log(message);
        this.emit('messageLogged',{id:1,url:'http://'});
    }
}
module.exports=Logger;


