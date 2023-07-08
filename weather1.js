let tem1=document.getElementById("tem1");
let hum1=document.getElementById("hum1");
let wea1=document.getElementById("wea1");
let win_spe1=document.getElementById("clo1");
let day1=document.getElementById("day1");

let tem2=document.getElementById("tem2");
let hum2=document.getElementById("hum2");
let wea2=document.getElementById("wea2");
let win_spe2=document.getElementById("clo2");
let day2=document.getElementById("day2");

let tem3=document.getElementById("tem3");
let hum3=document.getElementById("hum3");
let wea3=document.getElementById("wea3");
let win_spe3=document.getElementById("clo3");
let day3=document.getElementById("day3");

let tem4=document.getElementById("tem4");
let hum4=document.getElementById("hum4");
let wea4=document.getElementById("wea4");
let win_spe4=document.getElementById("clo4");
let day4=document.getElementById("day4");

let tem5=document.getElementById("tem5");
let hum5=document.getElementById("hum5");
let wea5=document.getElementById("wea5");
let win_spe5=document.getElementById("clo5");
let day5=document.getElementById("day5");

let image1=document.getElementById("image1");
let image2=document.getElementById("image2");
let image3=document.getElementById("image3");
let image4=document.getElementById("image4");
let image5=document.getElementById("image5");
let child01;let elem,para;
let demo1=document.getElementById("demo1");

let d,d1;
let x="Hyderabad";
function show(){
x=document.getElementById("search1").value;
console.log(x);
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${x}&appid=6f5eda98c71a07f82d618c54a225b2d5&units=metric`)
.then(res=>{
    console.log(res);
    return res.json()})
 .then(data=>{
   console.log(data.city.country);
  tem1.innerHTML=data.list[0].main.temp;
  hum1.innerHTML=data.list[0].main.humidity;
  wea1.innerHTML=data.list[0].weather[0].description;
  win_spe1.innerHTML=data.list[0].wind.speed;
  d=new Date(data.list[0].dt_txt);
  day1.innerHTML="TODAY";
image1.src=`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

  tem2.innerHTML=data.list[8].main.temp;
  hum2.innerHTML=data.list[8].main.humidity;
  wea2.innerHTML=data.list[8].weather[0].description;
  win_spe2.innerHTML=data.list[8].wind.speed;
  d1=new Date(data.list[8].dt_txt);
  day2.innerHTML=getDay1(d1.getDay());
  image2.src=`https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;

  tem3.innerHTML=data.list[16].main.temp;
  hum3.innerHTML=data.list[16].main.humidity;
  wea3.innerHTML=data.list[16].weather[0].description;
  win_spe3.innerHTML=data.list[16].wind.speed;
  d=new Date(data.list[16].dt_txt);
  day3.innerHTML=getDay1(d.getDay());
  image3.src=`https://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;

  tem4.innerHTML=data.list[24].main.temp;
  hum4.innerHTML=data.list[24].main.humidity;
  wea4.innerHTML=data.list[24].weather[0].description;
  win_spe4.innerHTML=data.list[24].wind.speed;
  d=new Date(data.list[24].dt_txt);
  day4.innerHTML=getDay1(d.getDay());
 image4.src=`https://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;

  tem5.innerHTML=data.list[32].main.temp;
  hum5.innerHTML=data.list[32].main.humidity;
  wea5.innerHTML=data.list[32].weather[0].description;
  win_spe5.innerHTML=data.list[32].wind.speed;
  d=new Date(data.list[32].dt_txt);
  day5.innerHTML=getDay1(d.getDay());
 image5.src=`https://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
 demo1.innerHTML=data.city.id;



 })
 .catch(error => {
   window.alert("Please Use locations based on geomaps");
   tem1.innerHTML="";
   hum1.innerHTML="";
   wea1.innerHTML="";
   win_spe1.innerHTML="";
  
   day1.innerHTML="Monday";

  tem2.innerHTML="";
  hum2.innerHTML="";
  wea2.innerHTML="";
  win_spe2.innerHTML="";
 
  day2.innerHTML="Tuesday";

  tem3.innerHTML="";
  hum3.innerHTML="";
  wea3.innerHTML="";
  win_spe3.innerHTML="";
 
  day3.innerHTML="Wednesday";

  tem4.innerHTML="";
  hum4.innerHTML="";
  wea4.innerHTML="";
  win_spe4.innerHTML="";
 
  day4.innerHTML="Thursday";

  tem5.innerHTML="";
  hum5.innerHTML="";
  wea5.innerHTML="";
  win_spe5.innerHTML="";
 
  day5.innerHTML="Friday";
   console.log('Error fetching data:', error);
 });
 function getDay1(x){
   let m;
   switch(x){
      case 0:m="SUNDAY";break;
      case 1:m="MONDAY";break;
      case 2:m="TUESDAY";break;
      case 3:m="WEDNESDAY";break;
      case 4:m="THURSDAY";break;
      case 5:m="FRIDAY";break;
      default:m="SATURDAY";break;}
      return m;
      
   }
 
}
show();