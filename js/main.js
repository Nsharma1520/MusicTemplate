console.log("Welcome to Dream Music World");
// intial variables
let songIndex = 0;
let audioElement = new Audio('Songs/Awazaan Raja Game Changerz.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
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
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-cirlce');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
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

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add()
        element.classList.remove()
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllplay();
        e.classList.add()
        e.classList.remove()
    })
})
