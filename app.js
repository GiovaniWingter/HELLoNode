let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.get("/Teste",function(req,res){
    res.render('secao/teste')
});
app.get("/",function(req,res){
    res.send('<!DOCTYPE html>'+
    '<html lang="pt-br">'+
    '<head>'+
       '<meta charset="UTF-8">'+
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<title>Home</title>'+
    '</head>'+
    '<body>'+
        'Servidor no ar...'+
    '</body>'+
    '</html>');
})
app.listen(5500, function(){
    console.log("Servidor do Express no ar....");
});