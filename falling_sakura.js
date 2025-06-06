class Sakura {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.interval = null;
    this.createPetal = this.createPetal.bind(this);
    this.start();
  }

  createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('sakura');
    const size = Math.random() * 10 + 15;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${Math.random() * window.innerWidth}px`;
    this.selector.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
  }

  start() {
    this.interval = setInterval(this.createPetal, 300);
  }
}

const style = document.createElement('style');
style.textContent = `.sakura {
  position: fixed;
  top: -30px;
  background-image: url('sakura.png');
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 9999;
  animation: fall 10s linear infinite;
  opacity: 0.8;
}
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);

new Sakura('body');