const fs = require('fs');
const http = require('http');
const mime = require('mime');
const atrtemplate = require('art-template');

http
.createServer((req,res)=>{
    res.end('ok')
})
.listen(80,()=>{
    console.log('running...')
})