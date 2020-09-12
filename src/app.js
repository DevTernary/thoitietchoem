const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();
const por = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Ternary'
    });
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title: 'About Page',
        name: 'Ternary'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{
        title: 'Help Page',
        name: 'Ternary',
        message: 'Just type somethings'
    })
})

app.get('/weather', ({query}, res) =>{
    if(!query.address){
        return res.send({
            error: 'No address is provided.'
        })
    }
    
    const geocode = require('../ultils/geocode');
    const forecast = require('../ultils/forecast');
    geocode(query.address,(error,{longitude,latitude,location}={})=>{
        if(error){
            return res.send({
                error
            })
        }
        forecast(longitude,latitude,(error,forecastData)=>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                location,
                forecastData
            })
        })    
    })
})

app.get('/help/*',(req, res)=>{
    res.render('404',{
        title: '404',
        name: 'Ternary',
        errMessage: 'Help article not found.'
    });
})

app.get('*',(req, res)=>{
    res.render('404',{
        title: '404',
        name: 'Ternary',
        errMessage: 'Page not found.'
    });
})

app.listen(port, () => {
    console.log('Server is running');
});