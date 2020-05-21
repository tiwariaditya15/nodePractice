const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   if ( req.url === '/home' || req.url === '/'){
       res.writeHeader(200, {'Content-Type': 'text/html'});
       fs.createReadStream( __dirname + '/index.html', 'utf8').pipe(res);
   } else if ( req.url === '/contact'){
        res.writeHeader(200, {'Content-Type': 'text/html'});
        fs.createReadStream( __dirname + '/contact.html', 'utf8').pipe(res);
    } else if ( req.url === '/pricing'){
        res.writeHeader(200, {'Content-Type': 'text/html'});
        fs.createReadStream( __dirname + '/pricing.html', 'utf8').pipe(res);
    }else if( req.url === '/api/candidates'){
     const details = [{
        "first": {
             "name" : "aditya",
             "age": 18,
             "experience": "freshers"
     
         },
     
         "second": {
             "name" : "pankaj",
             "age": 29,
             "experience": "5"
     
         },
     
         "third": {
             "name" : "priya",
             "age": 26,
             "experience": "none"
     
         } 
     
     }];
     res.writeHeader(200, {'Content-Type':'application/json'});
     res.end(JSON.stringify(details));
    }else{
        res.writeHeader(404, {'Content-Type': 'text/html'});
        fs.createReadStream( __dirname + '/404.html', 'utf8').pipe(res);
    }
});

server.listen(4000, '127.0.0.1');
console.log('Server started.');