const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.width = 2000;
// canvas.height = 1000;

let ctx = canvas.getContext("2d");
// ctx.translate(100, 100)

// ctx.font = "50px sans-serif";
// ctx.fillText("Hi Men", 215, -30)

// ctx.fillStyle = "green";
// ctx.fillRect(100 , 10 , 100 , 100);

// ctx.fillStyle = "blue";
// ctx.fillRect(250 , 150 , 100 , 100);

// ctx.fillStyle = "purple";
// ctx.fillRect(400 , 10 , 100 , 100);

// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(110, 200);
// ctx.lineTo(100, 20);
// ctx.lineTo(20 ,100);
// ctx.closePath();
// ctx.strokeStyle = "rgb(0, 0, 0)"
// ctx.stroke();
// ctx.fillStyle = "rgb(66, 161, 130)"
// ctx.fill();


// for(let i = 0; i < 1000; i++){
//     const x = Math.random() *window.innerWidth;
//     const y = Math.random() *window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 100, 0, Math.PI *2);
//     ctx.fillStyle = "rgb(95, 19, 19)";
//     ctx.stroke();
// }
// ctx.clearRect(-100, -100, window.innerWidth, window.innerHeight);

// const ball = document.getElementById("ball");
// let leftOfBall = 10;

// setInterval( () => {
//     ball.style.left = leftOfBall + "px";
//     leftOfBall += 1;
// }, 1)

// function animation(){
//     ball.style.left = leftOfBall + "px";
//     leftOfBall += 1;
//     requestAnimationFrame(animation);
// }
// animation();

// // now go and text it in CANVAS:

// let r = 20;
// let x = 25;
// let y = 25;
// let vx = 10;

// function animation1(){
//     // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     if(x >= 700){
//         return;
//     }
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, 10);
//     ctx.fillStyle = "red"
//     ctx.fill();
//     x += vx;
    
//     requestAnimationFrame(animation1);
// }
// animation1()

// function animation2(){
//     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, 10);
//     ctx.fillStyle = "red"
//     ctx.fill();
//     if(x + r + 10 >= window.innerWidth || x-r <= 0){
//         vx = -vx
//     }
//     x += vx;
    
//     requestAnimationFrame(animation2);
// }
// animation2();

// let r1 = 20;
// let x1 = randomDecide( 1+r1, window.innerWidth);
// let y1 = randomDecide( 1+r1, window.innerHeight);
// let vx1 = 10;
// let vy1 = 10;
// let vx1 = (Math.random() - 0.25) *15;
// let vy1 = (Math.random() - 0.25) *15;
// Dangerous: Because it can be a negative Number.../56


// function animation2(){
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // ctx.beginPath();
    // ctx.arc(x1, y1, r1, 0, 10);
    // ctx.fillStyle = "red"
    // ctx.fill(); 
    // if(x1 + r1 + 10 >= window.innerWidth || x1-r1 <= 0){
        // vx1 = -vx1
    // }
    // if(y1 + r1 + 10 >= window.innerHeight || y1-r1 <= 0){
        // vy1 = -vy1
    // }
    // x1 += vx1;
    // y1 += vy1;

    // requestAnimationFrame(animation2);
    // }
// animation2();


// //let r1 = 20;
// //let x1 = randomDecide( 1+r1, window.innerWidth);
// //let y1 = randomDecide( 1+r1, window.innerHeight);
// //let vx1 = 10;
// //let vy1 = 10;


// //function animation2(){
// //    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
// //    ctx.beginPath();
// //    ctx.arc(x1, y1, r1, 0, 10);
// //     ctx.fillStyle = "red"
// //    ctx.fill();
// //    if(x1 + r1 + 10 >= window.innerWidth || x1-r1 <= 0){
// //        vx1 = -vx1
// //    }
// //    if(y1 + r1 + 10 >= window.innerHeight || y1-r1 <= 0){
// //        vy1 = -vy1
// //    }
// //    x1 += vx1;
// //    y1 += vy1;

// //    requestAnimationFrame(animation2);
// //    }

// // animation2();
// // function randomDecide(min, max){
// //    return Math.floor(Math.random() * (max - min) + min);
// // }

// // OOP in the CANvAS:::::/57

// // ساخت بازی ساده با حرکات توپ
// this.screenDetails = {
//     width : window.innerWidth,
//     height : window.innerHeight,
// }
// this.mouse = {
//     x : screen.width /2,
//     y : screen.height /2,
// }
// function randomDecide(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
// }

// class MyBall{
//     constructor(x, y){
//         this.highLevel = 50
//         this.r2 = Math.random() * 45;
//         this.x2 = x || randomDecide(this.r2, window.innerWidth - this.r2);
//         this.y2 = y || randomDecide(this.r2, window.innerHeight - this.r2);
//         this.vx2 = (Math.random() - .5) * 20;
//         this.vy2 = (Math.random() - .5) * 20;
//         this.randomColor = `rgb(${ + Math.floor((Math.random()) * 255) + "," + Math.floor((Math.random()) * 255) + "," + Math.floor((Math.random()) * 255)})`;
//         this.draw();
//     }

//     draw(){
//         ctx.beginPath();
//         ctx.arc(this.x2, this.y2, this.r2, 0, 10);
//         ctx.fillStyle = this.randomColor;
//         ctx.fill();
//     }

//     update(){
//         if(this.x2 + this.r2 > window.innerWidth || this.x2 - this.r2 +5< 0){
//             this.vx2 = -this.vx2;
//         }
//         if(this.y2 + this.r2 > window.innerHeight || this.y2-this.r2 +5< 0){
//             this.vy2 = -this.vy2;
//         }
//         this.x2 += this.vx2;
//         this.y2 += this.vy2;
//         this.draw();
//     }
// }

// let myBall1 = [];
// for(i = 0; i < 100; i++){
//     myBall1.push(new MyBall);
// }


// function startAnimation(){
//     ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//     myBall1.forEach((BallInMyBall) => {
//         BallInMyBall.update();
//     })
//     requestAnimationFrame(startAnimation);
// }
// startAnimation();

// window.addEventListener("click", (e) =>{
//     myBall1.push(new MyBall(e.clientX, e.clientY))
// })

// window.addEventListener("mousemove", (e) => {
//    myBall1.forEach(ball =>{
//         const takeSpace = Math.sqrt(((e.clientX - ball.x2) ** 2) + ((e.clientY - ball.y2) ** 2));  
//         if(takeSpace < 100 && ball.r2 < ball.highLevel){
//             ball.r2 += 1;
//         }else if(ball.r2 > ball.highLevel -30){
//             ball.r2 -= 2;
//         }
//     })
// })
// window.addEventListener("click", (e) =>{
//     myBall1.push(new MyBall(e.clientX, e.clientY))
// })

// window.addEventListener("mousemove", (e) => {
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
// })

// window.addEventListener("resize", () =>{
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// })
// ارور دوباره تعریف کردن داره


// ساخت بازی جاذبه]



this.screenDetails = {
    width : window.innerWidth,
    height : window.innerHeight,
}
this.mouse = {
    x : screen.width /2,
    y : screen.height /2,
}
function randomDecide(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

class MyBall{
    constructor(x, y){
        this.gravity = 2;
        this.friction = 0.6;
        this.highLevel = 50;
        this.r2 = Math.random() * 45;
        this.x2 = x || randomDecide(this.r2, window.innerWidth - this.r2);
        this.y2 = y || randomDecide(this.r2, window.innerHeight - this.r2);
        this.vx2 = (Math.random()) * 10;
        this.vy2 = (Math.random()) * 10;
        this.randomColor = `rgb(${ + Math.floor((Math.random()) * 255) + "," + Math.floor((Math.random()) * 255) + "," + Math.floor((Math.random()) * 255)})`;
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x2, this.y2, this.r2, 0, 10);
        ctx.fillStyle = this.randomColor;
        ctx.fill();
    }

    update(){
        this.y2 += this.vy2;
        if( this.y2 + this.r2 + this.vy2 > screenDetails.height){
            this.vy2 = -this.vy2 * this.friction;
        }else{
            this.vy2 += this.gravity;
        }
        this.draw();
    }
}

class MakeAll{
    constructor(){
        this.myBall1 = [];
        for(let i = 0; i < 100; i++){
            this.myBall1.push(new MyBall());
        }   
    }

    animation(){
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.myBall1.forEach((BallInMyBall) => {
            BallInMyBall.update();
        })
        requestAnimationFrame(this.animation.bind(this));
    }
}
let make = new MakeAll();
make.animation();

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

window.addEventListener("resize", () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})