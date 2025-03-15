import './style.css';

// =============== Module

interface StarGeneratorOptions {
  containerId?: string; // ID of the container div; default is 'stars-container'
  images: string[]; // Array of image URLs/paths for the stars
  starCount?: number; // Total number of stars to spawn; if omitted, stars spawn indefinitely
  lifetime?: number; // Time (ms) before a star adds the destroy class
  animationDuration?: number; // Time (ms) for the destroy animation before removal
  spawnInterval?: number; // Interval (ms) between spawning stars
  starWidth?: string; // CSS width of the star (e.g., '50px')
  starHeight?: string; // CSS height of the star (e.g., '50px')
}

export class StarGenerator {
  private container: HTMLElement;
  private images: string[];
  private starCount?: number;
  private lifetime: number;
  private animationDuration: number;
  private spawnInterval: number;
  private starWidth: string;
  private starHeight: string;
  private timerId: number | null = null;
  private spawnedCount: number = 0;

  constructor(options: StarGeneratorOptions) {
    const {
      containerId = 'stars-container',
      images,
      starCount,
      lifetime = 5000,
      animationDuration = 1000,
      spawnInterval = 1000,
      starWidth = '50px',
      starHeight = '50px',
    } = options;

    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with id "${containerId}" not found.`);
    }
    this.container = container;
    this.images = images;
    this.starCount = starCount;
    this.lifetime = lifetime;
    this.animationDuration = animationDuration;
    this.spawnInterval = spawnInterval;
    this.starWidth = starWidth;
    this.starHeight = starHeight;
  }

  // Private method to spawn a single star
  private spawnStar(): void {
    // If starCount is defined and reached, stop spawning further stars.
    if (this.starCount !== undefined && this.spawnedCount >= this.starCount) {
      this.stop();
      return;
    }

    // Create a new div element for the star
    const starDiv = document.createElement('div');
    starDiv.classList.add('star'); // Base class; you can add additional styling in CSS
    starDiv.style.position = 'absolute';

    // Randomize the position within the viewport
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    starDiv.style.left = `${randomX}px`;
    starDiv.style.top = `${randomY}px`;

    // Randomly select one of the provided star images
    const randomIndex = Math.floor(Math.random() * this.images.length);
    const selectedImage = this.images[randomIndex];

    // Set background image and sizing properties
    starDiv.style.backgroundImage = `url('${selectedImage}')`;
    starDiv.style.backgroundSize = 'contain';
    starDiv.style.backgroundRepeat = 'no-repeat';
    starDiv.style.width = this.starWidth;
    starDiv.style.height = this.starHeight;

    // Generate a random rotation angle between 0 and 360 degrees
    const randomRotation = Math.random() * 360;

    // Apply rotation using transform
    starDiv.style.transform = `rotate(${randomRotation}deg)`;

    // Append the star to the container
    this.container.appendChild(starDiv);
    this.spawnedCount++;

    // After 'lifetime' ms, add the .destroy class for the animation,
    // then remove the element after 'animationDuration' ms.
    setTimeout(() => {
      starDiv.classList.add('destroy');
      setTimeout(() => {
        starDiv.remove();
        this.spawnedCount--;
      }, this.animationDuration);
    }, this.lifetime);
  }

  // Start spawning stars at the specified spawn interval
  public start(): void {
    this.timerId = window.setInterval(
      () => this.spawnStar(),
      this.spawnInterval
    );
  }

  // Stop spawning stars
  public stop(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
