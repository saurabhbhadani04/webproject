const cityName = document.getElementById('cityName');

const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

// const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer')



const getInfo = async(event)=>{
    event.preventDefault();

let cityVal = cityName.value;
    if(cityVal === ""){
city_name.innerText = `Plz write name before search`;
datahide.classList.add('data_hide');
    }else{
        try{
            // let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}units=metric&appid=58d71da25f63590d13113440929911e6`;
            // const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbaiunits=metric&appid=58d71da25f63590d13113440929911e6`);
           const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=73969add8c941ad8d530da21a22aab7e`);
           const data =  await response.json();
           const arrData = [data];

           city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
           temp_real_val.innerText = arrData[0].main.temp;
        //    temp_status.innerText = arrData[0].weather[0].main;

           const tempMood = arrData[0].weather[0].main;
           
           //condition ti check sunny or cloudy

           if(tempMood == "clear"){
            temp_status.innerHTML = 
           "<i class='fa-sharp fa-solid fa-sun-bright'style='color:#eccc68;'></i>"
           }else if(tempMood == "Clouds"){
            temp_status.innerHTML = 
            "<i class='fa-solid fa-clouds'style='color:#f1f2f6;'></i>"
           }else if(empMood =="Rain"){
            temp_status.innerHTML = 
       "<i class='fa-duotone fa-cloud-rain'style:'color:#a4b0be;'></i>"
         }else{
            temp_status.innerHTML = 
"<i class='fa-solid fa-cloud'style= 'color:#f1f2f6;'></i>"         
}
datahide.classList.remove('data_hide');




        }catch{
        city_name.innerText = `Plz  enter the city name properly`;
datahide.classList.add('data_hide');


        }
    }
}
 
submitBtn.addEventListener('click',getInfo);