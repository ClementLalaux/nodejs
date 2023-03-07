const fs = require('fs')
const net = require('net')

// let in_data;

// fs.readFile('./fn_input.txt',function(err,data){
//     if(err) return console.error(err);
//     in_data = data;
//     console.log('Async input file content : ' + in_data);
// })

// let out_data = "Output line 1. \r\nOutput line 2."

// fs.writeFile('./async_output.txt', out_data,function(err){
//     if (err) return console.error(err);
//     console.log('Async output file content : ' + out_data);
// })

// console.log('Program Ended')

const server = net.createServer(function(connection) {
    console.log('Client connected.');
    connection.on('end', function() {
        console.log('Client disconnected.');
    });
    connection.write('Hello World!\n');
    connection.pipe(connection);
// renvoie les données à l'objet de connexion qui est le client
})

server.listen(8081, function(){  // Port 8081 car 8080 déja utilisé par TomCat
    console.log('Server is listening.');
});

console.log('Server Program Ended');

// CTRL + C pour teminer le programme

const client = net.connect({port: 8081}, 'localhost', function() {
    console.log ('Connected to server.')
})

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
})

client.on('end', function () {
    console.log('Disconnected from server');
})

console.log('Client Program Ended');