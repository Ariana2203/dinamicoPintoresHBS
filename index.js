//Importamos paquetes requeridos
const express=require('express');
const hbs=require('hbs');
//Creamos la aplicacion
const app=express();
//definimos el motor de plantillas
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));
//Configurar rutas
app.get('/',(req, res)=>{
    res.render('index',{
        autor: 'Ariana Piñon',
        year: new Date().getFullYear(),
        title: 'Inicio'

    });
    
});
app.get('/kahlo',(req, res)=>{
    res.render('frida',{
        autor: 'Ariana Piñon',
        year: new Date().getFullYear(),
        title: 'Frida Kahlo'
    });
});
app.get('/warhol',(req, res)=>{
    res.render('andy',{
        autor: 'Ariana Piñon',
        year: new Date().getFullYear(),
        title: 'Andy Warhol'
    });
});
app.get('/velazquez',(req, res)=>{
    res.render('diego',{
        autor: 'Ariana Piñon',
        year: new Date().getFullYear(),
        title: 'Diego Velazquez'
    });
});
app.get('/rivera',(req, res)=>{
    res.render('diegoR',{
        autor: 'Ariana Piñon',
        year: new Date().getFullYear(),
        title: 'Diego Rivera'
    });
});

//Vamos a generar Partials
hbs.registerPartials(__dirname + '/views/partials')
//Servidor web
app.listen(3000, ()=>{
    console.log('Escuchando puerto 3000');
});
