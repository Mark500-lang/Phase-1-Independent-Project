
const name = document.getElementById("inputBreed");
const dogName = document.getElementById("dogTitle");
const image = document.getElementById("dogImg");
const likes = document.getElementById("likesCount");

//adding like event
function likesCount(){
    document.getElementById("likeBtn").addEventListener('click', (e)=>{
        const likes = document.getElementById("likesCount");
        console.log('woof') 

    });
};