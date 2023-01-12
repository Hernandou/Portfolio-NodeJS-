const express = require('express'); // => Importacion modulo Express
const app = express(); // => Creacion del objeto
const port = 3000;

//Recursos
app.set('view engine', 'ejs'); // => Carga el modulo del motor view engine 👀
app.use(express.static('public')); // => Ruta donded se encuentran los archivos estaticos

//Enrutamiento desde la raiz 
app.get('/',(req,res) => {
    res.render('index',{nombre: 'Hernan'});
});

app.get('/contacto',(req,res) => {
    res.send('MUCHAAAAACHOS');
});

app.get('/carrousel',(req,res) => {
    res.render('carrousel',{nombre: 'Hernan'});
});


app.listen(port, () => {
    console.log('Funca en el puerto:', port);
})

