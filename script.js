let canvas = document.getElementById("dogsnake");
let context = canvas.getContext("2d");
let box = 32; 
let dogsnake = [];
dogsnake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "green";
    context.fillRect(0, 0, 16*box, 16*box); //veja: posição cartesiana com quadrado em box. Desenha o retangulo do jogo//
}
function criarDogsnake (){
    for(i = 0; i < dogsnake.length; i++){
        context.fillStyle = "black";
        context.fillRect(dogsnake[i].x, dogsnake[i].y, box, box);
    }
}
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);

}
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}


function iniciarJogo(){
    
    if(dogsnake[0].x > 15*box && direction == 'right') dogsnake[0].x = 0;
    if(dogsnake[0].x < 0  && direction == 'left') dogsnake[0].x = 16*box;
    if(dogsnake[0].y > 15*box && direction == 'down') dogsnake[0].y = 0;
    if(dogsnake[0].y < 0 && direction == 'up') dogsnake[0].y = 16*box;    

    for(i = 1; i < dogsnake.length; i++){
        if(dogsnake[0].x == dogsnake[i].x && dogsnake[0].y == dogsnake[i].y){
            clearInterval(jogo);
            alert('It is over!Dogsnake is dead');
        }
    }
    
    criarBG();
    criarDogsnake();
    drawFood();
    iniciarJogo();
    
    let dogsnakeX = dogsnake[0].x;
    let dogsnakeY = dogsnake[0].y;
   
    if(direction == "right") dogsnakeX += box;
    if(direction == "left") dogsnakeX -= box;
    if(direction == "up") dogsnakeY -= box;
    if(direction == "down") dogsnakeY += box;

    if (dogsnakeX != food.x || dogsnakeY != food.y){
       
        dogsnake.pop(); 
    
    }
    else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let newHead = {
        x: dogsnakeX,
        y: dogsnakeY
    }

    dogsnake.unshift(newHead);
    
}

let jogo = setInterval(iniciarjogo, 100); 







