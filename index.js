
const name = document.getElementById("inputBreed");
const dogName = document.getElementById("dogTitle");
const image = document.getElementById("dogImg");
const likes = document.getElementById("likesCount");
var dog  = 'golden retriever'

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dogs?name=' + name,
    headers: { 'X-Api-Key': 'live_ns0Z6Hxx6sjhdboz3RoUYTYue9HkkpcVTnx0CYMsYaGaWZVJk2aQzIhk7qj7ReCX'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

//adding like event
function likesCount(){
    document.getElementById("likeBtn").addEventListener('click', (e)=>{
        const likes = document.getElementById("likesCount");
        console.log('woof') 

    });
};