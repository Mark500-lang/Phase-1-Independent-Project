
var name = document.getElementById("selectBreed");
var dogName = document.getElementById("dogTitle");
var image = document.getElementById("dogImg");
var life = document.getElementById("lifeExpectancy");
var weightMale = document.getElementById("weightMale");
var weightFemale = document.getElementById("weightFemale");
var coatLength = document.getElementById("coatLength");
var shedding = document.getElementById("shedding");
var trainability = document.getElementById("trainability");
var likes = document.getElementById("likesCount");
var dog = 'labrador'

function fetchApiNinja() {
    fetch('https://api.api-ninjas.com/v1/dogs?name=' + dog,{
    method: "GET",
    headers: {'X-Api-Key': 'txnBMmne4+CBpk7YCQcS5g==JCz1gtAHw8pVigCh'},
    contentType: 'application/json',
})
    .then(response => response.json()) 
    .then((dogInfo) => {
        console.log(dogInfo);
        image.src = dogInfo[0].image_link;
        dogName.innerHTML = dogInfo[0].name;
        life.innerHTML = dogInfo[0].max_life_expectancy;
        weightMale.innerHTML = dogInfo[0].max_weight_male;
        weightFemale.innerHTML = dogInfo[0].max_weight_female;
        coatLength.innerHTML = dogInfo[0].coat_length;
        shedding.innerHTML = dogInfo[0].shedding;
        trainability.innerHTML = dogInfo[0].trainability;
        
    }) 
    .catch(err => console.log(err));
};


//adding like event
function likesCount(){
    document.getElementById("likeBtn").addEventListener('click', (e)=>{
        const likes = document.getElementById("likesCount");
        console.log('woof'); 

    });
};

document.addEventListener("DOMContentLoaded", function () {
    fetchApiNinja();
});