const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
var img_url1 = "";
var img_url2 = "";

document.body.style.backgroundImage = "url('./img/normal2.jpg')";

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    messageOne.textContent = 'Loading...';

    const location = search.value;
    fetch('/weather?address='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error;
        }else{
            document.getElementById("myBtn1").style.display = "inline-block";
            document.getElementById("myBtn2").style.display = "inline-block";
            messageOne.textContent = data.location;
            const main1 = data.forecastData[0].main;
            const description1 = data.forecastData[0].description;
            const max_temp1 = data.forecastData[0].temp_daily_max;
            const min_temp1 = data.forecastData[0].temp_daily_min;

            const main2 = data.forecastData[1].main;
            const description2 = data.forecastData[1].description;
            const max_temp2 = data.forecastData[1].temp_daily_max;
            const min_temp2 = data.forecastData[1].temp_daily_min;
            switch(main1){
              case "Thunderstorm":
                img_url1 = "Thunderstorm.jpg";
                document.getElementById("modal-header1").style.color = "#ededf5";
                document.querySelector('#today-message').textContent = "Hôm nay trời có " + description1 + ".<<Em có ra ngoài vào trời như thế này thì cẩn thận nha em>>.À mà nhiệt độ hôm nay cao nhất là " + max_temp1 + ",thấp nhất là " + min_temp1 + " độ nha.♥";
                break;
              case "Drizzle":
                img_url1 = "Drizzle.jpg";
                document.getElementById("modal-header1").style.color = "#fffdc7";
                document.querySelector('#today-message').textContent = "Hôm nay trời có " + description1 + ".<<Hơi se lạnh em ha, nhớ mặc ấm nè>>.Nhiệt độ hôm nay cao nhất là " + max_temp1 + ",thấp nhất là " + min_temp1 + " độ nha.♥";
                break;
              case "Rain":
                img_url1 = "Rain.jpg";
                document.getElementById("modal-header1").style.color = "#fffdc7";
                document.querySelector('#today-message').textContent = "Nay trời có " + description1 + ".<<Nhớ mang áo mưa đó>>.Nhiệt độ hôm nay cao nhất là " + max_temp1 + ",thấp nhất là " + min_temp1 + " độ nha.♥";
                break;
              case "Snow":
                img_url1 = "Snow.jpg";
                document.getElementById("modal-header1").style.color = "#2b2a2a";
                document.querySelector('#today-message').textContent = "Hôm nay trời có " + description1 + " đó.<<Mặc thật ấm em nha>>.Nhiệt độ hôm nay cao nhất là " + max_temp1 + ",thấp nhất là " + min_temp1 + " độ nha.♥";
                break;
              case "Atmosphere":
                img_url1 = "Atmosphere.jpg";
                document.getElementById("modal-header1").style.color = "#2b2a2a";
                document.querySelector('#today-message').textContent = "Nay trời có " + description1 + " nha.<<Thấy hiu ghê>>.Nhiệt độ hôm nay cao nhất là " + max_temp1 + ",thấp nhất là " + min_temp1 + " độ nha.♥";
                break;
              case "Clear":
                img_url1 = "Clear.jpg";
                document.getElementById("modal-header1").style.color = "white";
                document.querySelector('#today-message').textContent = "Nay trời " + description1 + " em nha.<<Chắc nắng lắm,skincare kĩ càng nào>>.Nhiệt độ hôm nay cao nhất là " + max_temp1 + ",thấp nhất là " + min_temp1 + " độ nha.♥";
                break;
              case "Clouds":
                img_url1 = "Clouds.jpg";
                document.getElementById("modal-header1").style.color = "#545273";
                document.querySelector('#today-message').textContent = "Nay trời có " + description1 + ".<<Cười nhiều,vui nhiều>>.À mà nhiệt độ hôm nay cao nhất là " + max_temp1 + ",thấp nhất là " + min_temp1 + " độ nha.♥";
                break;
            }
            switch(main2){
              case "Thunderstorm":
                img_url2 = "Thunderstorm.jpg";
                document.getElementById("modal-header2").style.color = "#ededf5";
                document.querySelector('#tomorrow-message').textContent = "Ngày mai trời có " + description2 + ".<<Em có ra ngoài vào trời như thế này thì cẩn thận nha em>>.À mà nhiệt độ hôm nay cao nhất là " + max_temp2 + ",thấp nhất là " + min_temp2 + " độ nha.♥";
                break;
              case "Drizzle":
                img_url2 = "Drizzle.jpg";
                document.getElementById("modal-header2").style.color = "#fffdc7";
                document.querySelector('#tomorrow-message').textContent = "Ngày mai trời có " + description2 + ".<<Hơi se lạnh em ha, nhớ mặc ấm nè>>.Nhiệt độ hôm nay cao nhất là " + max_temp2 + ",thấp nhất là " + min_temp2 + " độ nha.♥";
                break;
              case "Rain":
                img_url2 = "Rain.jpg";
                document.getElementById("modal-header2").style.color = "#fffdc7";
                document.querySelector('#tomorrow-message').textContent = "Mai trời có " + description2 + ".<<Nhớ mang áo mưa đó>>.Nhiệt độ hôm nay cao nhất là " + max_temp2 + ",thấp nhất là " + min_temp2 + " độ nha.♥";
                break;
              case "Snow":
                img_url2 = "Snow.jpg";
                document.getElementById("modal-header2").style.color = "#2b2a2a";
                document.querySelector('#tomorrow-message').textContent = "Ngày mai trời có " + description2 + " đó.<<Mặc thật ấm em nha>>.Nhiệt độ hôm nay cao nhất là " + max_temp2 + ",thấp nhất là " + min_temp2 + " độ nha.♥";
                break;
              case "Atmosphere":
                img_url2 = "Atmosphere.jpg";
                document.getElementById("modal-header2").style.color = "#2b2a2a";
                document.querySelector('#tomorrow-message').textContent = "Mai trời có " + description2 + " nha.<<Thấy hiu ghê>>.Nhiệt độ hôm nay cao nhất là " + max_temp2 + ",thấp nhất là " + min_temp2 + " độ nha.♥";
                break;
              case "Clear":
                img_url2 = "Clear.jpg";
                document.getElementById("modal-header2").style.color = "white";
                document.querySelector('#tomorrow-message').textContent = "Mai trời " + description2 + " em nha.<<Chắc nắng lắm,skincare kĩ càng nào>>.Nhiệt độ hôm nay cao nhất là " + max_temp2 + ",thấp nhất là " + min_temp2 + " độ nha.♥";
                break;
              case "Clouds":
                img_url2 = "Clouds.jpg";
                document.getElementById("modal-header2").style.color = "#545273";
                document.querySelector('#tomorrow-message').textContent = "Mai trời có " + description2 + ".<<Cười nhiều,vui nhiều>>.À mà nhiệt độ hôm nay cao nhất là " + max_temp2 + ",thấp nhất là " + min_temp2 + " độ nha.♥";
                break;
            }
        }
    })
})
})

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementById("close1");
btn1.onclick = function() {
  modal1.style.display = "block";
  document.getElementById("modal-header1").style.backgroundImage = "url('./img/" + img_url1 + "')";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementById("close2");
btn2.onclick = function() {
  modal2.style.display = "block";
  document.getElementById("modal-header2").style.backgroundImage = "url('./img/" + img_url2 + "')";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}