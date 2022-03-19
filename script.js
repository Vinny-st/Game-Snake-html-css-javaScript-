let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /* context renderixa oque acontece no canvas, colocando 2d ele passa o plano 2d*/
let box = 32; /*pixel que serao trabalhados*/
let snake = [];
snake [0] = { /* */
    x: 8 * box,
    y: 8 * box
}

function criarBG() { /*funcao que vai desenhar e definir o cor no canvas*/
    context.fillStyle = "lightgreen"; /* fillstyle trabalha com o stilo do canvas,*/
    context.fillRect(0, 0, 16 * box, 16 * box); /*fill react desenha o retangulo onde vai rodar jogo*/
}
function criarCobrinha(){ /* for percorre todo o array e vai incrementar*/
/*vai pintar e pintar tamanho certo*/
    for(i=0; i < snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();