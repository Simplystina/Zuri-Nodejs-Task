const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req,res){
    if(req.url ==='/'){
        fs.readFile('index.html', function(err,data){
        
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
           })     
    }else if(req.url === '/contact'){
        fs.readFile('contact.html', function(err,data){
        
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
           })    
    } else if(req.url === '/about'){
        fs.readFile('about.html', function(err,data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
           })    
    }else{
        res.write('Url does not exist')
        res.end()
    }
    
})

server.listen(8000)