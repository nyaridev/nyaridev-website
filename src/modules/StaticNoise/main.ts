import './style.css';

// =============== Module

export class StaticNoise {
  private container: HTMLDivElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('div');
    this.container.classList.add('static-noise');
    this.container.style.visibility = 'hidden';
    parent.appendChild(this.container);
  }

  // Turns on the static noise effect.
  public turnOn() {
    if (this.container && this.container.parentElement) {
      this.container.style.visibility = '';
    }
  }

  // Turns off the static noise effect.
  public turnOff() {
    if (this.container && this.container.parentElement) {
      this.container.style.visibility = 'hidden';
    }
  }

  // Destroy the static noise element.
  public destroy() {
    if (this.container && this.container.parentElement) {
      this.container.parentElement.removeChild(this.container);
    }

    (this as any).Container = null;
  }
}
