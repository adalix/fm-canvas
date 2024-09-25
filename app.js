const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");    


const minX = 120;
const rangeX = 200;

let p = 0;

const img = new Image();
img.src = 'saha_yatay.png';
img.style.transform =" rotate(90deg)";


const player = {
    playerWidth : 20,
}


class CreatePlayer {
    constructor(x, y, w, ra) {
        this.x = x,
        this.y = y,
        this.w = w,
        this.ra = ra
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, 100, player.playerWidth, 0, Math.PI*2);
        ctx.fill();
    }
}

function createPlayer(x, y, w, ra){
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(x, 100, player.playerWidth, 0, Math.PI*2);
    ctx.fill();
}


console.log(createPlayer(300,300, 20))
animate()

// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.lineWidth = 4;
// ctx.strokeStyle = "blue";
// ctx.stroke();

function animate(){
    
    let x = minX + rangeX * p;
    let maxX = 500;

    p = p + 0.05;


    
    if(x > canvas.width/2 - 120 ){
            // x = 120;
            return x;
        }
        
        // ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, 1400,650 )
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(x, 100, player.playerWidth, 0, Math.PI*2);
        ctx.fill();


        ctx.arc(x, 230, player.playerWidth, 0, Math.PI*2);

        ctx.fillStyle = "white";
        ctx.fill(); 

        ctx.arc(x, 370, player.playerWidth, 0, Math.PI*2);
        ctx.fill();

        ctx.arc(x, 500, player.playerWidth, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, 50, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.lineWidth = 4;                      //! burasi tam istedigim gibi olusturacagin classi buna gore ayarla !!!
        ctx.strokeStyle = "blue";
        ctx.font = "25px Arial";
        ctx.strokeText("23",x,50);
        ctx.stroke();

    requestAnimationFrame(animate);
}