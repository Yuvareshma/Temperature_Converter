const celsius=document.querySelector("#result");
const degree=document.querySelector("#degree");
const btn=document.querySelector("#convert");
const type=document.querySelector("#degree-type");

window.addEventListener("load",()=>{
    degree.value="";
    celsius.innerHTML="";
});

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertion();
});

function convertion(){
    let input=degree.value;
    if(type.value==="fahrenheit"){
        const FahrenheitToCelsius=(input-32)*(5/9);
        celsius.innerHTML=`${FahrenheitToCelsius.toFixed(3)}&deg;c`;
    }
    else if (type.value === "kelvin") {
        const KelvinToCelsius = input - 273.15;
        celsius.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
}