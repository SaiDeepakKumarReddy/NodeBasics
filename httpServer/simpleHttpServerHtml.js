const http=require("http");
const url=require("url");

const server=http.createServer((req,res)=>{
   const requrl=req.url;
   const headers=req.headers;
   const parts=url.parse(requrl,true);
   console.log(parts)
   switch(parts.pathname){
    case '/home':
        res.setHeader("content-type", 'text/html');
        res.end(
            `
            <!doctype html>
            <html>
            <body>
            Home
            </body>
            </html>
            `
        );
        break;
    case '/about':
        res.setHeader("content-type", 'text/html');
        res.end(
            ` 
            <!doctype html>
            <html>
            <body>
            About Us
            </body>
            </html>
            `
        );
        break;
    default:
        res.statusCode=404;
        res.end("Page not found")
   }
});

server.listen(3000);
