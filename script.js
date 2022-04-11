const canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Context: circumstances for drawing
let c = canvas.getContext('2d');
console.log(c);

//Rectangle
//fillRect(x, y, width, height)

// let i = 600, j = 600;
// c.fillStyle = "rgba(144, 252, 151, 0.8)";
// i-=300, j-=500;
// c.fillRect(i, j, 200, 200)
// c.fillStyle = "rgba(0, 255, 227, 0.7)";
// i += 50, j-=-350;
// c.fillRect(i, j, 200, 200)




// Line

// let x = 600, y = 600;
// c.beginPath();
// c.moveTo(x, y);
// for (let i = 0; i < 7; i++) {
//     if (i % 2 == 0) x+=100, y-=300;
//     else if(i % 2 == 1) x+=100, y+=300;
//     c.lineTo(x, y);
// }
// c.strokeStyle = "blue";
// c.stroke();

// Circle/arc
// arc(x, y, radius, startAngle, endAngle, counterClockwise)

// for (let p = 0; p < 100; p++) {
//     let m = Math.random() * window.innerWidth, n = Math.random() * window.innerHeight;
//     let col1 = Math.random() * 255, col2 = Math.random() * 255, col3 = Math.random() * 255;
//     console.log(col1, col2, col3);
//     c.beginPath();
//     c.strokeStyle = `rgba(${col1}, ${col2}, ${col3}, 1)`;
//     c.arc(m, n, 50, 0, 2*Math.PI, true);
//     c.stroke();

// }

//Circle Object
function Circle(x, y, dx, dy, radius, col1, col2, col3){
    this.draw = function() {
        c.beginPath();
        c.strokeStyle = `rgba(${col1}, ${col2}, ${col3}, 1)`;
        c.arc(x, y, radius, 0, 2*Math.PI, true);
        c.fill();
        c.stroke();
    }
    this.update = function() {
        x+=dx;
        y+=dy;
        if (x + radius> innerWidth || x - radius < 0) dx=-dx;
        if (y + radius > innerHeight || y - radius < 0) dy=-dy;

        this.draw();
    }
}

//Create Array of Circles
let circleArray = [];
for (let i = 0; i < 100; i++) {
    let radius = 60;
    let x = Math.random()*(window.innerWidth-radius*2)+radius, y = Math.random()*(window.innerHeight-radius*2)+radius;
    let dx = (Math.random()-0.5) * 3, dy = (Math.random()-0.5) * 3;

    //Colors
    let col1 = Math.random() * 255, col2 = Math.random() * 255, col3 = Math.random() * 255;


    circleArray.push(new Circle(x, y, dx, dy, radius, col1, col2, col3));
}




//Animate Circles from the Array
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}
animate();