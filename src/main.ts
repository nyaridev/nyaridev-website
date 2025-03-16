import { StaticNoise } from './modules/StaticNoise/main';
import { StarGenerator } from './modules/StarGenerator/main';

// =============== App Base

const app: HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!;

// Scalling Icons
document.querySelectorAll('.social-icon-img').forEach((box) => {
  const elem = box as HTMLImageElement;
  const scale = Number(elem.getAttribute('data-scale'));
  if (!isNaN(scale)) {
    elem.style.setProperty('height', `${90 * scale}%`);
  }
});

// =============== Stars

const star1 = new StarGenerator({
  parent: app,
  images: [
    './stars/star_1.png',
    './stars/star_2.png',
    './stars/star_3.png',
    './stars/star_4.png',
    './stars/star_5.png',
    './stars/star_6.png',
    './stars/star_7.png',
    './stars/star_8.png',
    './stars/star_9.png',
    './stars/star_10.png',
    './stars/star_11.png',
    './stars/star_12.png',
    './stars/star_13.png',
    './stars/star_14.png',
    './stars/star_15.png',
    './stars/star_16.png',
    './stars/star_17.png',
    './stars/star_18.png',
  ],

  starCount: 25,
  lifetime: 3500,
  animationDuration: 1000,
  spawnInterval: 200,
});

star1.start();

// =============== Effects

// Static Noise Effect
const staticNoise = new StaticNoise(app);
staticNoise.turnOn();

// =============== Loaded

app.classList.add('loaded');
