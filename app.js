const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");   

canvas.width = innerWidth;
canvas.height = innerHeight

const image = {
    imageX : 960,
    imageY : 601 
}

const img = new Image();
img.src = 'saha_yatay.png';
img.style.transform = " rotate(90deg)";


let mouse = {
    x : undefined ,
    y : undefined 
}


addEventListener('mousemove', (e)=>{
        mouse.x = e.clientX,
        mouse.y = e.clientY

})

function getDistance(x1,y1,x2,y2){
    let xDist = x2 - x1
    let yDist = y2 - y1
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}


class Ball{
    constructor(){
        this.x = mouse.x,
        this.y = mouse.y,
        this.radius = 10,
        this.color = 'white'
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        this.draw()
    }
    
}

class CreatePlayer {
    constructor() {
        this.x = Math.random() * image.imageX,
        this.y = Math.random() * image.imageY,
        this.w = 20,
        this.radius = 20,
        this.color = 'red' ,
        this.speed = Math.random() * 1,
        this.number = Math.floor(Math.random() * 11 + 1 )
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.font = "20px Arial";
        ctx.strokeText(this.number, this.x-10, this.y+6);
        ctx.stroke();
    }
    update(){
        this.draw()
    }
    getBall(){
        console.log(this.x)
        this.x += this.speed * (mouse.x >= this.x) ? 1 : -1
        this.y += this.speed  * (mouse.y >= this.y) ? 1 : -1
        console.log(this.x ,'bu ikinci')
    }
}
let ball  = new Ball()
// let player = new CreatePlayer(); 
let players = []

for(let i = 0 ; i < 4; i++){
    players.push(new CreatePlayer())
}

console.log(players)
    

function animate(){

    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    for (let i = 0; i < players.length; i++){
        players[i].update()
        players[i].getBall()
    }

    ball.x = mouse.x
    ball.y = mouse.y
    ball.update()

    // if(getDistance(ball.x, ball.y, player.x, player.y) < ball.radius + player.radius){
    //     ball.color = 'red';
    // }else{
    //     ball.color = 'white';
    // }

}
animate()


    // 960 x 601

    // kaleci 102 x 348


        // ctx.beginPath();
        // ctx.arc(x, 50, 30, 0, 2 * Math.PI);
        // ctx.fillStyle = "red";
        // ctx.fill();
        // ctx.lineWidth = 4;                      //! burasi tam istedigim gibi olusturacagin classi buna gore ayarla !!!
        // ctx.strokeStyle = "blue";
        // ctx.font = "25px Arial";
        // ctx.strokeText("23",x,50);
        // ctx.stroke();