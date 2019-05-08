const fs = require('fs');
const http = require('http');
// const mime = require('mime');
// const atrtemplate = require('art-template');

http
.createServer((req,res)=>{
    const url = req.url
    if(url==='/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
              return  res.end("404")
            }
            res.setHeader('content-type','text/html;charset=utf-8')
            return res.end(data.toString())
        })


    }else if(url==='/post.html'){
        fs.readFile('./post.html',(err,data)=>{
            if(err){
              return  res.end("404")
            }
            res.setHeader('content-type','text/html;charset=utf-8')
            return res.end(data.toString())
        })

    }else if(url.startsWith('/public/')){

        const path = `.${url}`
        fs.readFile(path,(err,data)=>{
            if(err){
                return res.end('404')
            }
            res.setHeader('Content-type','text/css;charset=utf-8')
            res.end(data.toString())
        })
    }







})
.listen(80,()=>{
    console.log('running...')
})