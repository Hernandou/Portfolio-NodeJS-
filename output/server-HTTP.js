const http = require('http'); //Imprortacion del modulo http
const fs = require('fs');

const host = '127.0.0.1'; //IP del servidor http
const port = 5500; //Puerto en el que va a estar abierto

// func() => {} es una funcion flecha introducida en ES6
//Creacion del servidor con el objeto HTTP
const server = http.createServer((req,res) => { //server es un objeto en el cual se almacenan los requerimientos y las respuestas
    
    fs.readFile('index.html',(error,data) =>{

        if(!error){
        res.writeHead(200, {
            'Content-Type' : 'text/plain'
        })
        console.log('File found!')
        }else{
            console.log('File NOT found')
        }

        res.end();
    });


}); 

server.listen(port,host,() => {
    console.log('Server working in port: ' + host, port);
})