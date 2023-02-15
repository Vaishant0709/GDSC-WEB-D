function search(){
    let w=document.querySelector("#in");
    let cito="city="+w.value;
    let app='https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?';
    let fil=app+cito
    




const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01e4d952c9msh071099c812da0c4p10970cjsnbae43b9b6fe7',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(fil, option)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)



       AQI.innerHTML=JSON.stringify(response.overall_aqi);
       CO.innerHTML="CO :-"+JSON.stringify(response.CO.concentration)+"ppm";
       NO2.innerHTML="NO2 :-"+JSON.stringify(response.NO2.concentration)+"ppm"
       O3.innerHTML="O3 :-"+JSON.stringify(response.O3.concentration)+"ppb"
       
       PM10.innerHTML="PM10 :-"+JSON.stringify(response.PM10.concentration)+"ug/m3"
       SO2.innerHTML="SO2 :-"+JSON.stringify(response.SO2.concentration)+"ppb"







    })
	.catch(err => console.error(err));

        //let p=document.querySelector("#in");
        let citi='q='+w.value+'&days=5';
        let ape='https://weatherapi-com.p.rapidapi.com/forecast.json?'
        let files=ape+citi;
    
    
    const option2 = {
    method: 'GET',
    headers: {
             'X-RapidAPI-Key': '01e4d952c9msh071099c812da0c4p10970cjsnbae43b9b6fe7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
        
    fetch(files, option2)
    .then(response => response.json())
    .then(response => {
        
        
        console.log(response)
        
        //Hourly
        desc0.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[0].condition.text);
        temp0.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[0].temp_c)+"°C";
        desc1.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[1].condition.text);
        temp1.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[1].temp_c)+"°C";
        desc2.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[2].condition.text);
        temp2.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[2].temp_c)+"°C";
        desc3.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[3].condition.text);
        temp3.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[3].temp_c)+"°C";
        desc4.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[4].condition.text);
        temp4.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[4].temp_c)+"°C";
        desc5.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[5].condition.text);
        temp5.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[5].temp_c)+"°C";
        desc6.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[6].condition.text);
        temp6.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[6].temp_c)+"°C";
        desc7.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[7].condition.text);
        temp7.innerHTML="Temp :-   "+" "+" "+" "+JSON.stringify(response.forecast.forecastday[0].hour[7].temp_c)+"°C";
    
        //daily
        date0.innerHTML=JSON.stringify(response.forecast.forecastday[0].date); 
        des0.innerHTML=JSON.stringify(response.forecast.forecastday[0].day.condition.text);
        Mtemp0.innerHTML="Max Temp :- "+JSON.stringify(response.forecast.forecastday[0].day.maxtemp_c)+"°C";
        mtemp0.innerHTML="Min Temp :- "+JSON.stringify(response.forecast.forecastday[0].day.mintemp_c)+"°C";
        date1.innerHTML=JSON.stringify(response.forecast.forecastday[1].date); 
        des1.innerHTML=JSON.stringify(response.forecast.forecastday[1].day.condition.text);
        Mtemp1.innerHTML="Max Temp :- "+JSON.stringify(response.forecast.forecastday[1].day.maxtemp_c)+"°C";
        mtemp1.innerHTML="Min Temp :- "+JSON.stringify(response.forecast.forecastday[1].day.mintemp_c)+"°C";
        date2.innerHTML=JSON.stringify(response.forecast.forecastday[2].date); 
        des2.innerHTML=JSON.stringify(response.forecast.forecastday[2].day.condition.text);
        Mtemp2.innerHTML="Max Temp :- "+JSON.stringify(response.forecast.forecastday[2].day.maxtemp_c)+"°C";
        mtemp2.innerHTML="Min Temp :- "+JSON.stringify(response.forecast.forecastday[2].day.mintemp_c)+"°C";
    
        //temp upar wala
        temp.innerHTML=JSON.stringify(response.forecast.forecastday[0].hour[0].temp_c)+"°C";

        //Misc
        max_temp.innerHTML="Max Temp :- "+JSON.stringify(response.forecast.forecastday[0].day.maxtemp_c)+"°C";
        min_temp.innerHTML="Min Temp :- "+JSON.stringify(response.forecast.forecastday[0].day.mintemp_c)+"°C";
        humidity.innerHTML="Humidity :- "+JSON.stringify(response.current.humidity)+"%";
        wind_speed.innerHTML="Wind Speed :- "+JSON.stringify(response.current.gust_kph)+"Km/h";
        wind_degrees.innerHTML="Wind Degrees :- "+JSON.stringify(response.current.wind_degree)+"°"+" "+JSON.stringify(response.current.wind_dir);

        //Sun
        sunrise.innerHTML="Sun Rise Time:- "+JSON.stringify(response.forecast.forecastday[0].astro.sunrise);
        sunset.innerHTML="Sun Set Time:- "+JSON.stringify(response.forecast.forecastday[0].astro.sunset);

        //Moon
        moonphase.innerHTML="Moon Cycle Phase :- "+JSON.stringify(response.forecast.forecastday[0].astro.moon_phase);
        moonrise.innerHTML="Moon Rise Time:- "+JSON.stringify(response.forecast.forecastday[0].astro.moonrise);
        moonset.innerHTML="Moon Set Time:- "+JSON.stringify(response.forecast.forecastday[0].astro.moonset);

        //City
        tempo.innerHTML=w.value;







    
    
    
        
    
    
    
    })
    .catch(err => console.error(err));       
    
       
}