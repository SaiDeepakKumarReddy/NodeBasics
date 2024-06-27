const http=require("http");
const url=require("url");

const server=http.createServer((req,res)=>{
   const resurl=req.url;
   const parts=url.parse(resurl,true);
   console.log(parts)
   const {x,y}=parts.query;
   switch(parts.pathname){
    case '/add':
        res.end(""+(+x + +y));
        break;
    case '/multiply':
        res.end(""+(+x * +y));
        break;
    default:
        res.end("Unsupported Operation")
   }
});

server.listen(3000);
