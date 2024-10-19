const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");   

 canvas.width = innerWidth;
canvas.height = innerHeight

// const img = new Image();
// img.src = 'saha_yatay.png';
// img.style.transform =" rotate(90deg)";


let mouse = {
    x : innerWidth / 2,
    y : innerHeight / 2
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
        this.x = Math.random() * innerWidth,
        this.y = Math.random() * innerHeight,
        this.w = 20,
        this.radius = 20
        this.color = 'red'
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        // ctx.lineWidth = 2;
        // ctx.strokeStyle = "black";
        // ctx.font = "20px Arial";
        // ctx.strokeText("23", this.x-10, this.y+6);
        // ctx.stroke();
    }
    update(){
        this.draw()
    }
}
let ball  = new Ball()
let player = new CreatePlayer(); 

function animate(){

    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height)
    
    ball.x = mouse.x
    ball.y = mouse.y
    ball.update()

    
    player.x += 0.6 * ((mouse.x >= player.x) ? 1 : -1);
    player.y += 0.6  * ((mouse.y >= player.y) ? 1 : -1);

    player.update()

    if(getDistance(ball.x, ball.y, player.x, player.y) < ball.radius + player.radius){
        ball.color = 'red';
    }else{
        ball.color = 'white';
    }

    

}
animate()






        // ctx.beginPath();
        // ctx.arc(x, 50, 30, 0, 2 * Math.PI);
        // ctx.fillStyle = "red";
        // ctx.fill();
        // ctx.lineWidth = 4;                      //! burasi tam istedigim gibi olusturacagin classi buna gore ayarla !!!
        // ctx.strokeStyle = "blue";
        // ctx.font = "25px Arial";
        // ctx.strokeText("23",x,50);
        // ctx.stroke();