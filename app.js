const http=require("http")
http.createServer((req,res)=>{
    res.write("backend started")
    res.end()
}).listen(2003)
