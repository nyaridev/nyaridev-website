import './style.css';

import { LandingContainer } from './elems/container/main';
import { LandingCard } from './elems/card/main';
import { SectionsNav } from './elems/sections/main';

// =============== App Base

const app: HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!;

// =============== Elements

const landing = new LandingContainer(app);
new LandingCard(landing.Container, 'nari | socials', './av.png');

const sectionsNav = new SectionsNav(landing.Container);
sectionsNav.addButton('a', () => {});
sectionsNav.addButton('b', () => {});

// =============== Sections

// Socials

const section_socials: HTMLDivElement = document.createElement('div');
section_socials.style.display = 'none';
section_socials.setAttribute('data-section-id', 'socials');
section_socials.className = 'landing-section';
landing.Container.appendChild(section_socials);

section_socials.innerHTML = `
  <p>youtube</p>
  <p>ig</p>
  <p>twitter/x</p>
  <p>github</p>
  <p>roblox</p>
  <p>dc</p>
`;

// Other

const section_other: HTMLDivElement = document.createElement('div');
section_other.style.display = 'none';
section_other.setAttribute('data-section-id', 'other');
section_other.className = 'landing-section';
landing.Container.appendChild(section_other);

section_other.innerHTML = `
  <p>idk</p>
`;

// =============== Functions

const landingSectionButtons = document.querySelectorAll<HTMLElement>('.landing-section-button');
const landingSections = document.querySelectorAll<HTMLElement>('.landing-section');

// Function to open a section based on sectionId
const openSection = (sectionId: string) => {
  // Hide all sections
  landingSections.forEach((section) => {
    section.style.display = 'none';
  });

  // Show the section corresponding to the sectionId
  const correspondingSection = document.querySelector<HTMLElement>(`.landing-section[data-section-id="${sectionId}"]`);
  if (correspondingSection) {
    correspondingSection.style.display = 'block'; // Show the section
  }

  // Remove the 'selected' class from all buttons
  landingSectionButtons.forEach((btn) => {
    btn.classList.remove('selected');
  });

  // Add the 'selected' class to the button corresponding to the sectionId
  const correspondingButton = document.querySelector<HTMLElement>(`.landing-section-button[data-section-id="${sectionId}"]`);
  if (correspondingButton) {
    correspondingButton.classList.add('selected');
  }
};

// Loop through all buttons and add click event listeners
landingSectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sectionId = button.getAttribute('data-section-id');
    if (sectionId) {
      openSection(sectionId); // Call openSection with the sectionId from the button
    }
  });
});

// =============== Init

openSection('socials');
