const stacks = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Figma",
  "Miro",
  "Capacitor",
  "Cordova",
  "Cypress",
  "Postman",
  "Katalon"
];

const slider = document.getElementById("stackSlider")!;

stacks.forEach(skill => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = skill;
  slider.appendChild(card);
});

const reveals = document.querySelectorAll(".reveal");
