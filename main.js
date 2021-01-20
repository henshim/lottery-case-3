/*
let canvas = document.getElementById('roll');
let numbs=[];
let number = function (canvas, img, number) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.width = 400;
    this.height = 100;
    this.img = img;
    this.numberSprite = number;
    this.frameIndex = 2;

    this.loadImg = function () {
        this.numbImg = new Image();
        this.numbImg.src = this.img;
        this.draw();
    }

    this.frameUpdate = function () {
        if (this.frameIndex < this.numberSprite - 1) {
            this.frameIndex++;
        } else {
            this.frameIndex = 0;
        }
    }

    this.draw = function () {
        for (let i = 0; i < 6; i += 100) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(
                this.numbImg,
                this.frameIndex * this.width / this.numberSprite,
                0, this.width / this.numberSprite,
                this.height, 0, 0,
                this.width / this.numberSprite,
                this.height
            );
        }
    }
}

function loop() {
    numb.frameUpdate();
    numb.draw();
    requestAnimationFrame(loop);
}

function loop2() {
    setInterval(function () {
        numb.frameUpdate();
        numb.draw();
    }, 120);
}

let numb = new number(canvas, 'numb.jpg', 10);
numb.loadImg();
loop2();

/!*
let numb2 = new number(canvas,'numb.jpg',10);
numb2.loadImg();
loop2();*!/
*/
