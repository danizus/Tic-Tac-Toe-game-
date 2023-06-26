let music = new Audio("jim-yosef-x-roy-knox-sun-goes-down-ncs-release_KB96fVy4.mp3")
let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("game-over-sound-effects-high-quality_zpZvgEQk.mp3")
let gameStart = new Audio("Game Start Sound Effect.mp3")
let turn = "X"
let draw = document.getElementsByClassName("boxtext").innerText;
let isGameOver = false;

let checkwinner = true


// function to chnage the turn
const changeTurn = ()=>{
    
    return turn === "X"? "O" : "X";
             
}

// function to check the win

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext")
       let wins =  [
           [0,1,2],
           [3,4,5],
           [6,7,8],
           [0,3,6],
           [1,4,7],
           [2,5,8],
           [0,4,8],
           [2,4,6]
   
      ]
   wins.forEach(e => {
       
   if(checkwinner){
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== '')){
            
            gameOver.play();
            checkwinner = false
            document.getElementsByTagName("img")[0].src = "excited-spin.gif";

           document.querySelector(".info").innerText = "you win " + boxtext[e[0]].innerText;
           
           document.querySelector(".info").style.backgroundColor = "brown"
           isGameOver = true;
           document.getElementsByTagName("img")[0].style.width = "200px";
   
       }}
       
      
      
   
   })}



//main game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element) =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        
        if(boxtext.innerText ===""){
        boxtext.innerText = turn;
         turn = changeTurn();
        audioTurn.play();
        
        checkwin();
        if(!isGameOver){
            document.getElementsByClassName("info")[0].innerText = "your turn " + turn;
         ;}
         
        
       
           
        
        

        
       
    

    }
    })

})








document.querySelector(".playsong").addEventListener('click',(e)=>{ 
    if(e.target.innerText === "play"){
    e.target.innerText = 'stop';
    music.play();
    
    

    
}else{
    e.target.innerText = 'play'
    music.pause()
    
   
   


}

})

document.getElementById("reset").addEventListener('click',(e)=>{
    gameStart.play();
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    isGameOver = false;
    turn = "X";
    checkwinner = true;
   

    if(!isGameOver){
        
        document.getElementsByClassName("info")[0].innerText = "your turn "+ turn;}
        document.getElementsByTagName("img")[0].style.width = "0px"
        document.querySelector(".info").style.backgroundColor = "white"
   
    

    


})
