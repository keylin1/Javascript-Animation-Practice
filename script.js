let canvas;
let ctx;

let incrementor = 0;
let decrementor = 300;

window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  ctx.fillStyle = 'rgb(248, 247, 241)';
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  ctx.fillStyle = 'rgb(27, 73, 101)';
  ctx.fillRect(incrementor-40, 500, incrementor+80, decrementor--);
  ctx.fillStyle = 'rgb(98, 182, 203)';
  ctx.fillRect(incrementor++, decrementor++, incrementor++, incrementor++);
  ctx.fillStyle = 'rgb(190, 233, 232)';
  ctx.fillRect(decrementor--, decrementor--, 250, 250);
  ctx.fillStyle = 'rgb(202, 233, 255)';
  ctx.fillRect(100, decrementor--, 50, 300);
  ctx.fillStyle = 'rgb(255, 200, 221)';
  ctx.fillRect(incrementor-80, decrementor++, 200, 150);
  ctx.fillStyle = 'rgb(255, 175, 204)';
  ctx.fillRect(decrementor+500, incrementor+6, 500, 50);
  ctx.fillStyle = 'rgb(255, 250, 193)';
  ctx.fillRect(decrementor+800, decrementor+6, 80, 800);
  ctx.fillStyle = 'rgb(231, 198, 255)';
  ctx.fillRect(incrementor, 400, decrementor++, 50);
}
