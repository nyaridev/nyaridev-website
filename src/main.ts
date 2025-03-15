import { StarGenerator } from './modules/StarGenerator/main';
import { StaticNoise } from './modules/StaticNoise/main';

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

// =============== Effects

// Static Noise Effect
const staticNoise = new StaticNoise(app);
staticNoise.turnOn();

// =============== Stars

const star1 = new StarGenerator({
  containerId: 'stars-container',
  images: ['./stars/star_1.png', './stars/star_2.png', './stars/star_3.png', './stars/star_4.png', './stars/star_5.png'],
  starCount: 20, // Spawn a total of 20 stars
  lifetime: 5000, // Each star waits 5 seconds before the destroy animation
  animationDuration: 1000, // 1 second for the destroy animation
  spawnInterval: 1000, // A star spawns every second
  starWidth: '50px',
  starHeight: '50px',
});
const star2 = new StarGenerator({
  containerId: 'stars-container',
  images: ['./stars/star_1.png', './stars/star_2.png', './stars/star_3.png', './stars/star_4.png', './stars/star_5.png'],
  starCount: 60, // Spawn a total of 20 stars
  lifetime: 5000, // Each star waits 5 seconds before the destroy animation
  animationDuration: 1000, // 1 second for the destroy animation
  spawnInterval: 1000, // A star spawns every second
  starWidth: '50px',
  starHeight: '50px',
});

star1.start();
star2.start();

// =============== Loaded

app.classList.add('loaded');
