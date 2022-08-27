console.log("Welcome to Dream Music World");
// intial variables
let songIndex = 0;
let audioElement = new Audio('Songs/Awazaan Raja Game Changerz.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
 


let songs = [
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/1.jpg"},
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/2.jpg"},
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/3.jpg"},
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/4.jpg"},
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/5.jpg"},
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/6.jpg"},
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/7.jpg"}
]


// audioElement.play();

// Handle Play/Pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

// listen to Event
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    // update slidebar

});