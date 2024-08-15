

//const weatherapi='http://api.weatherapi.com/v1/current.json?key=acf223f0f41541a48e595551241508&q=London&aqi=yes'


let cityName= document.querySelector("#cityName")
let SearchButton= document.querySelector("#search_button")
let h1= document.querySelector("#one")
let h2= document.querySelector("#two")
let h3= document.querySelector("#three")
let h4= document.querySelector("#four")

async function weatherApi(city){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=acf223f0f41541a48e595551241508&q=${city}&aqi=yes`)

    return await promise.json()
    

}

SearchButton.addEventListener("click",async ()=>{
    const inputValue = cityName.value;
    const result = await weatherApi(inputValue)
    console.log(result)

   one.innerText=` Country : ${result.location.country}, Region : ${result.location.name}`;
   two.innerText=`Temperature : ${result.current.temp_c} deg`
   three.innerText=`Current time :  ${result.location.localtime}`
   four.innerText=`Humidity : ${result.current.humidity}`


    

})