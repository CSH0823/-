const fs = require('fs');
const http = require('http');
const mime = require('mime');
const atrTemplate = require('art-template');
// const dbPath = './db.json';

const comments=[
    {
        name:"曹少华",
        content:"三十年河东三十年河西，莫欺少年穷"
    },
    {
        name:"江左梅郎",
        // email:"2169265216@qq.com",
        // tel:18910525823,
        content:"三十年河东三十年河西，莫欺少年穷"
    },
    {
        name:"佑卿",
        // email:"2169265216@qq.com",
        // tel:18910525823,
        content:"三十年河东三十年河西，莫欺少年穷"
    },
    {
        name:"从别后",
        // email:"2169265216@qq.com",
        // tel:18910525823,
        content:"三十年河东三十年河西，莫欺少年穷"
    }
]


http
.createServer((req,res)=>{
    const url = req.url
    const method = req.method.toLowerCase();
    if(method==='get' && url==='/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
              return  res.end("404")
            }
            data = atrTemplate.render(data.toString(),{comments:comments})
            res.setHeader('content-type','text/html;charset=utf-8')
            return res.end(data)
        
        })

    }else if(method==='get' && url==='/post'){
        fs.readFile('./post.html',(err,data)=>{
            if(err){
              return  res.end("404")
            }
            res.setHeader('content-type','text/html;charset=utf-8')
            return res.end(data.toString())
        })

    }else if(method==='get' && (url.startsWith('/public/')||url.startsWith('/node_modules/'))){

        const path = `.${url}`
        fs.readFile(path,(err,data)=>{
            if(err){
                return res.end('404')
            }
            res.setHeader('Content-type',mime.getType(path))
            res.end(data.toString())
        })
    }else if(method==='post' && url==='/post'){

        const shuRuBodyDataStr = ''
        req.on('data',chunk=>{
            shuRuBodyDataStr+=chunk
        })

        req.on('end',()=>{
            const shuRu = queryString.parse(shuRuBodyDataStr) 






            fs.readFile('./index.html',(err,data)=>{

            })

        })
    }







})
.listen(80,()=>{
    console.log('running...')
})