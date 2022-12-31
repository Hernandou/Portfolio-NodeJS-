const express = require('express'); //Importacion modulo Express
const app = express(); //Creacion del objeto

//Recursos
app.set('view engine', 'ejs');
app.use(express.static('public'));
//Enrutamiento 
app.get('/',(req,res) => {

    res.render('index');
});


app.listen(3000, () => {
    console.log('Funca en el puerto: 3000');
})

