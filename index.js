
var name = document.getElementById("selectBreed");
var dogName = document.getElementById("dogTitle");
var image = document.getElementById("dogImg");
const likes = document.getElementById("likesCount");
var dog  = 'german shepherd'

function fetchApiNinja() {
    fetch('https://api.api-ninjas.com/v1/dogs?name=' + dog,{
    method: "GET",
    headers: {'X-Api-Key': 'txnBMmne4+CBpk7YCQcS5g==JCz1gtAHw8pVigCh'},
})
    .then(response => response.json()) 
    .then(data => {
        image.src = data.image_link;
        dogName.innerHTML = data.name;
        console.log('energy');
    }) 
    .catch(err => console.log(err));
};


/*S$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dogs?name=' + dog,
    headers: { 'X-Api-Key': 'txnBMmne4+CBpk7YCQcS5g==JCz1gtAHw8pVigCh'},
    contentType: 'application/json',
    success: function(result) {
        image = data.image_link;
        dogName = data.name;
        console.log(data.energy);
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});*/

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