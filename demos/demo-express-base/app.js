const express = require('express');

const app = express()

const data = [];

// création d'un middleware personalisé qui s'applique à tous nos EndPoints
// app.use(function (req,res,next) {
//     console.log(Date.now());
//     next();
// })

// utilisation d'un middleware fourni par express
app.use(express.json())

// création d'un EndPoint sur le verbe get à la racine de mon url
app.get('/',function(req,res){
    res.send('Hello World 1');
  // res.json(req.headers)
});

// app.get('/',function(req,res){
//     res.send('Hello World 2');
//   // res.json(req.headers)
// });

// création d'un EndPoint sur le verbe get à l'adresse /data qui recupere et renvoie le parametre nomparams
app.get('/data/:nomparams',function(req,res){
  res.json(datareq.params.nomparams)
});

app.get('/data', (req,res) => {
    res.json(data)
})


// création d'un EndPoint sur le verbe post à la racine de mon url
app.post('/',(req,res) => {
  //  res.send("test de verbe post")
  data.push(req.body)
  res.json(req.body)

})

app.all('/secret', function(req,res) {
    res.send("test sur tous les verbes")
})


app.listen(3000, function() {
    console.log('app.js ecoute sur port 3000')
})