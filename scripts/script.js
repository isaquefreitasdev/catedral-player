let title = document.getElementById("title");
let music = [
    {
        title: "Nosso Amor - Catedral",
        img: "./src/imgs/catedral.jpg",
        src: "./src/musics/O Nosso Amor (Ao Vivo).mp3"
    },
    {
        title:"Quem disse que o Amor - Catedral",
        img:"/src/imgs/catedral.jpg",
        src:"./src/musics/Catedral - Quem Disse Que o Amor Pode Acabar_.mp3"
    }
]
let imgBanda = document.getElementById("img_Banda");
let audio = document.getElementById("audio")
let pauseorplay = document.getElementById("pauseorplay");
let nextButton = document.getElementById("nextButton");
let index = 0;
function playPause() {
    if (audio.paused) {
        audio.play()
        pauseorplay.src = "./src/imgs/pausa.png"
    } else {
        audio.pause()
        pauseorplay.src = "./src/imgs/botao-play.png"

    }
}
function nextMusic() {
    index++;
    if (index >= music.length) {
        index = 0; // Volta para a primeira música quando atinge o final da lista
    }
    title.textContent = music[index].title;
    imgBanda.src = music[index].img;
    audio.src = music[index].src;
    if (audio.paused) {
        audio.play();
        pauseorplay.src = "./src/imgs/pausa.png";
    }
    imgBanda.classList.toggle("position"); // Adiciona a classe quando a música anterior é selecionada
}
function beforeMusic(){
    index--;
    
    if(index < 0){
        index = music.length - 1;
    }
    title.textContent = music[index].title;
    imgBanda.src = music[index].img;
    audio.src = music[index].src;
    
    if (audio.paused) {
        audio.play();
        pauseorplay.src = "./src/imgs/pausa.png";
    }
    imgBanda.classList.toggle("position"); // Adiciona a classe quando a música anterior é selecionada

}


