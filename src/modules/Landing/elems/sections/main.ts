import './style.css';

export class SectionsNav {
  public Container: HTMLDivElement;

  constructor(parent: HTMLDivElement) {
    // Container
    this.Container = document.createElement('div');
    this.Container.classList.add('landing-sections');
    parent.appendChild(this.Container);
  }

  addButton(label: string, callback: (ev: MouseEvent) => void): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('landing-section-button');
    button.classList.add('font-xl');
    button.innerHTML = `
        <p>${label}</p>
    `;

    button.addEventListener('click', callback);

    this.Container.appendChild(button);

    return button;
  }
}
