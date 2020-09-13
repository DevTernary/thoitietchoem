const request = require('request');

const forecast = (longitude,latitude,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&exclude=hourly,minutely&appid=edb7824edd6304aaf3c3d3a00dcaaf53&lang=vi&units=metric'

    request({url, json: true},(error,{body})=>{
        if(error){
            callback('Kết nối có vấn đề rồi em ơi~~~~',undefined);
        }else if(body.cod === "400")
        {
            callback('Tọa độ sai sai !!!',undefined);
        }else{
            callback(undefined,[
                {
                    moment: 'today',
                    main: body.daily[0].weather[0].main,
                    description: body.daily[0].weather[0].description,
                    temp_daily_min: body.daily[0].temp.min,
                    temp_daily_max: body.daily[0].temp.max
                },
                {
                    moment: 'tomorrow',
                    main: body.daily[1].weather[0].main,
                    description: body.daily[1].weather[0].description,
                    temp_daily_min: body.daily[1].temp.min,
                    temp_daily_max: body.daily[1].temp.max
                }
            ]);
        }
    })
}

module.exports = forecast;