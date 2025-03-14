import './style.css';

export class LandingContainer {
  private Landing: HTMLDivElement;
  public Container: HTMLDivElement;

  constructor(parent: HTMLDivElement) {
    // Landing
    this.Landing = document.createElement('div');
    this.Landing.classList.add('landing');
    parent.appendChild(this.Landing);

    // Container
    this.Container = document.createElement('div');
    this.Container.classList.add('landing-container');
    this.Landing.appendChild(this.Container);
  }
}
