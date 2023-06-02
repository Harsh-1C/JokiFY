
const setup = document.querySelector("#setup")
const delivery = document.querySelector("#delivery")
const btn = document.querySelector(".btn")
const aud = new Audio('audio.mp3');

console.log(btn.innerHTML)
getJoke();
btn.addEventListener("click",getJoke)


function getJoke(){
    url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=religious,political,racist'
    fetch(url)
    .then(response=>response.json())
    .then((data)=>{
        if(data.joke!=undefined){
            setup.style.height = "100%"
            delivery.style.height = "0%"
            delivery.textContent = "";
            setup.textContent = `"${data.joke}"`; 
        }
        else{
            setup.style.height = "50%"
            delivery.style.height = "50%"
            setup.textContent = `"${data.setup}"`;
            delivery.textContent = `"${data.delivery}"`
        }
        setTimeout(() => {
            aud.play();
        }, 2000);
    })
    .catch(e=>console.log(e))
}





