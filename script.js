const canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Context: circumstances for drawing
let c = canvas.getContext('2d');
console.log(c);

//Rectangle
//fillRect(x, y, width, height)
let i = 600, j = 600;
c.fillStyle = "rgba(144, 252, 151, 0.8)";
i-=300, j-=500;
c.fillRect(i, j, 200, 200)
c.fillStyle = "rgba(0, 255, 227, 0.7)";
i += 50, j-=-350;
c.fillRect(i, j, 200, 200)




// Line
let x = 600, y = 600;
c.beginPath();
c.moveTo(x, y);
x+=100, y-=300;
c.lineTo(x, y);
x+=100, y+=300;
c.lineTo(x, y)
x+=100, y-=300;
c.lineTo(x, y)
x+=100, y+=300;
c.lineTo(x, y)
x+=100, y-=300;
c.lineTo(x, y)
x+=100, y+=300;
c.lineTo(x, y)
x+=100, y-=300;
c.lineTo(x, y)
c.strokeStyle = "blue";
c.stroke();

// Circle/arc
// arc(x, y, radius, startAngle, endAngle, counterClockwise)
for (let p = 0; p < 100; p++) {
    let m = Math.random() * window.innerWidth, n = Math.random() * window.innerHeight;
    let col1 = Math.random() * 255, col2 = Math.random() * 255, col3 = Math.random() * 255;
    console.log(col1, col2, col3);
    c.beginPath();
    c.strokeStyle = `rgba(${col1}, ${col2}, ${col3}, 1)`;
    c.arc(m, n, 50, 0, 2*Math.PI, true);
    c.stroke();

}