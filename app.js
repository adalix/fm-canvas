const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");   

canvas.width = innerWidth;
canvas.height = innerHeight

const image = {
    imageX : 960,
    imageY : 601 
}

const img = new Image();
img.src = 'pitch_horizontal.png';
img.style.transform = " rotate(90deg)";

let mouseX;
let mouseY;

addEventListener('mousemove', (e)=>{
    mouseX = e.clientX
    mouseY = e.clientY

})

class Ball{
    constructor(){
        this.x = mouseX,
        this.y = mouseY,
        this.radius = 10,
        this.color = 'white'
        this.isBall = false
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        this.draw()
        if(mouseX || mouseY ){
            this.isBall = true
        }
    }
    
}

class Player {
    constructor(x,y,color,number ) {
        this.x = x
        this.y = y
        this.w = 20
        this.radius = 20
        this.color = color 
        this.speed = Math.random() * 1
        this.number = number
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
    trackBall(){
        if(ball.isBall){
            this.x += this.speed * (mouseX >= this.x) ? 1 : -1
            this.y += this.speed  * (mouseY >= this.y) ? 1 : -1
            console.log('ball in the pitch')
        }
        
    }
}


let ball  = new Ball()
let players = []
let defenders = []

for(let i = 0 ; i < 4; i++){
    let x = 163
    let y = Math.random() * 163 
    let color = 'blue'
    let number = 2
    
    defenders.push(new Player(x,y,color,number))

}
players = players.concat(defenders) 

function animate(){

    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    for (let i = 0; i < players.length; i++){
        players[i].update()
        players[i].trackBall()
    }

    ball.x = mouseX
    ball.y = mouseY
    ball.update()

}
animate()