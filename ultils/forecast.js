const request = require('request');

const forecast = (longitude,latitude,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&exclude=hourly,minutely&appid=edb7824edd6304aaf3c3d3a00dcaaf53&lang=vi'

    request({url, json: true},(error,{body})=>{
        if(error){
            callback('Unable to connect weather forecast services !!!',undefined);
        }else if(body.cod === "400")
        {
            callback('Invalid coordinate !!!',undefined);
        }else{
            callback(undefined,"It's " + Math.round(body.current.temp-273) + " degrees out.");
        }
    })
}

module.exports = forecast;