import './style.css';

export class LandingCard {
  public Container: HTMLDivElement;

  constructor(parent: HTMLDivElement, title: string, imgUrl: string) {
    // Container
    this.Container = document.createElement('div');
    this.Container.classList.add('landing-card');
    parent.appendChild(this.Container);

    // Display
    this.Container.innerHTML = `
    <div class="landing-card-img-container">
        <img src="${imgUrl}" class="landing-card-img"></img>
    </div>
    <p class="landing-card-title">${title}</p>
    `;
  }
}
