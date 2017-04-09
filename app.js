const uri = 'https://locationiq.org/v1/search.php?key='
const apiKey = 'e20aec2a5e1ab86a4488'
const api2 = 'bdbf726718cb74df56bb709e100db88c'
const getInfo = document.getElementById('weather')

const city = document.getElementById('city')
const country = document.getElementById('country')
//let url = 'http://api.openweathermap.org/data/2.5/weather?q=vancouver,canada&appid='
let url = 'https://api.apixu.com/v1/current.json?key=fbc5694c2a5449c8b7061954170904&q='








function fetchWeather () {
    const city1 = city.value
    const country1 = country.value
    console.log(city1)
    console.log(country1)
    
fetch(`${uri}${apiKey}&format=json&city=${city1}&country=${country1}`)
 .then((res) => res.json())
  .then((data) => {
    console.log(data)
    fetch(`${url}${data[0].lat},${data[0].lon}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let temperature = data.current.temp_c
        const div = document.getElementById('display')
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const litemp = document.createElement('li')
        litemp.textContent = 'Temperature:  '+data.current.temp_c+'°c'
        li.textContent='Weather_conditions:  '+data.current.condition.text
        const img = document.createElement('img')
        const imgtemp = document.createElement('img')
        img.src='https:'+data.current.condition.icon
        li.appendChild(img)
          ul.appendChild(li)
          div.appendChild(ul)
          
          
          if (data.current.temp_c<0)
        {
          imgtemp.src='png/snowflake.png'
          litemp.appendChild(imgtemp)
          ul.appendChild(litemp)
          
        }
        else if(data.current.temp_c==0)
        {
          imgtemp.src='png/thermometer.png'
          litemp.appendChild(imgtemp)
          ul.appendChild(litemp)
          
        }
        else if(0<data.current.temp_c)
        {
          imgtemp.src='png/thermometer-1.png'
          litemp.appendChild(imgtemp)
          ul.appendChild(litemp)
          
        }
        else if(25<data.current.temp_c<50)
        {
          imgtemp.src='png/thermometer-2.png'
          litemp.appendChild(imgtemp)
          ul.appendChild(litemp)
          
        }
        div.appendChild(ul)
        
    })
    
	

	})	
}

getInfo.addEventListener('submit',(e)=>{
	e.preventDefault()
	fetchWeather()
})



// function weather() {

// city = document.getElementById('city').value;

// country = document.getElementById('country').value;

// }

       
        // const img = document.createElement('img')
        // img.id = 'conditionimg'
        // const img1 = document.createElement('img')
        // img1.id = 'tempimg'
        
        // img.src='https:'+data.current.condition.icon
        // li.appendChild(img)
        //   ul.appendChild(li)
        //   div.appendChild(ul)

// function show(app) {
             
//         let html = '<ul>';
//         html += '<li>' + app.name + ' </li>' + '<li>' + convertKelvinToCelsius(app.main.temp) + ' </li>' + '<li>' + app.weather[0].description + ' </li> </ul>'
              
     
//         document.getElementById('display').innerHTML = html;
     
//       }



// function convertKelvinToCelsius(kelvin) {
// 	if (kelvin < (0)) {
// 		return 'below absolute zero (0 K)';
// 	} else {
// 		return Math.floor(kelvin-273.15);
// 	}
// }