console.log("Welcome to Dream Music World");
// intial variables
let songIndex = 0;
let audioElement = new Audio('Songs/Awazaan Raja Game Changerz.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songBackward = document.getElementById('songBack');
let songForward = document.getElementById('songForward');
let songItems = Array.from(document.getElementsByClassName('songItems'))
 


let songs = [
    {songName : "Unstopable", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/1.jpg"},
    {songName : "Sorry", filePath: "Songs/Baby Baby Mankirt Aulakh.mp3", coverPath: "images/2.jpg"},
    {songName : "Let me", filePath: "Songs/Besharam Bewaffa B Praak.mp3", coverPath: "images/3.jpg"},
    {songName : "Duniya", filePath: "Songs/Besharam Bewaffa B Praak.mp3", coverPath: "images/4.jpg"},
    {songName : "Love me, like you Do", filePath: "Songs/Brotherhood Mankirt Aulakh.mp3", coverPath: "images/5.jpg"},
    {songName : "Diamond", filePath: "Songs/Brotherhood Mankirt Aulakh.mp3", coverPath: "images/6.jpg"},
    {songName : "Diamond", filePath: "Songs/Awazaan Raja Game Changerz.mp3", coverPath: "images/7.jpg"}
]


songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update slidebar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// Abhi baki h complete krna


songBackward.addEventListener('click', ()=>{
    progress = parseInt((((audioElement.currentTime)-30)/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;

})
songForward.addEventListener('click', ()=>{
    progress = parseInt((((audioElement.currentTime)+30)/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllplay();
    })
})
