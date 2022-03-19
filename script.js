let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /* context renderixa oque acontece no canvas, colocando 2d ele passa o plano 2d*/
let box = 32; /*pixel que serao trabalhados*/
let snake = [];
snake [0] = { /* */
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG() { /*funcao que vai desenhar e definir o cor no canvas*/
    context.fillStyle = "lightgreen"; /* fillstyle trabalha com o stilo do canvas,*/
    context.fillRect(0, 0, 16 * box, 16 * box); /*fill react desenha o retangulo onde vai rodar jogo*/
}

function criarCobrinha(){ /* for percorre todo o array e vai incrementar*/
/*vai pintar e pintar tamanho certo*/
    for(i=0; i < snake.length; i++){
    context.fillStyle = "black";
    context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown' , update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down" ) direction = "up";
    if(event.keyCode == 39 && direction != "left" ) direction = "right";
    if(event.keyCode == 40 && direction != "up" ) direction = "down";

}


function iniciarJogo(){
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0; 
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 *box;

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
