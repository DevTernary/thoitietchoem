const request = require('request');

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoid3N0ZXJuYXJ5IiwiYSI6ImNrZTlzbXYwZjA2eHUzMW1qYWlkd3Z4M3EifQ.wq62ooX4r08WL3GT8B8g3Q&limit=1';

    request({url, json: true},(error, {body}) => {
        if(error){
            callback('Kết nối có vấn đề rồi em ơi ~~~~',undefined);
        }else if(body.features.length === 0){
            callback('Hình như em nhập nhầm rồi thì phải,đâu có địa điểm này đâu.Thử lại em nha !!!',undefined);
        }else{
            callback(undefined,{
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;