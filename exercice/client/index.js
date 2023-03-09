const express = require("express");

const app = express()

const clients = [];

app.use(express.json())

app.get('/',function(req,res){
    res.send('Accueil des clients');
})

app.post('/',(req,res) => {
    clients.push(req.body)
    res.json(req.body)
})

app.get('/clients',function(req,res){
    res.json(clients)
})

app.get('/clients/:id',function(req,res){
    clients.forEach(element => {
        if(element.id = req.params.id){
            res.json(element);
        }
    });
})

app.put('/clients/:id',function(req,res){
    clients.forEach(element => {
        if(element.id == req.params.id){
            clients.splice(req.params.id,1,req.body)
            res.json(clients);
        }
    });
})

app.delete('/clients/:id',function(req,res){
    clients.forEach(element => {
        if(element.id == req.params.id){
            clients.splice(req.params.id,1)
            res.json(clients);
        }
    });
})

app.listen(3000, function() {
    console.log('app.js ecoute sur port 3000')
})