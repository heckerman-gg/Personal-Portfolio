import { projects, techStack } from "./data.js";

const themeBtn = document.querySelector(".theme");
const dlCv = document.getElementById("cv-btn");
const githubBtn = document.querySelector(".github-btn");
const profilePic = document.querySelector(".pfp");
const cards = document.querySelectorAll(".cards");
const infoIcon = document.querySelector(".info-icon");
const gradcapIcon = document.querySelector(".gradcap-icon");
const stackIcon = document.querySelector(".stack-icon");
const skillsContainer = document.querySelectorAll(".tech-stack");
const projectContainer = document.querySelector(".projects");
const linkedinFooterBtn = document.querySelector(".linkedin-btn");
const githubFooterBtn = document.querySelector(".github-footer-btn");
const socials = document.querySelectorAll(".socials");
let projectIcon = document.querySelector(".project-icon");
console.log(projectContainer);
console.log(cards);
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = "<img src='./assets/images/sun.png' alt='' />";
    themeBtn.style.borderColor = "#414144ff";
    themeBtn.style.backgroundColor = "#1f1f23ff";
    profilePic.src = "./assets/images/night-mode-pfp.png";
    infoIcon.src = "./assets/images/info-light.png";
    gradcapIcon.src = "./assets/images/graduation-cap-light.png";
    stackIcon.src = "./assets/images/layers-light.png";
    linkedinFooterBtn.src = "./assets/images/linkedin-light.png";
    githubFooterBtn.src = "./assets/images/github.png";
    cards.forEach((card) => {
      card.classList.add("dark-mode");
    });
    skillsContainer.forEach((skill) => {
      skill.classList.add("dark-mode");
    });
    socials.forEach((social) => {
      social.classList.add("dark-mode");
    });
  } else {
    themeBtn.innerHTML = "<img src='./assets/images/moon.png' alt='' />";
    themeBtn.style.borderColor = "#949595ff";
    themeBtn.style.backgroundColor = "#f1f2f3ff";
    profilePic.src = "./assets/images/light-mode-pfp.png";
    infoIcon.src = "./assets/images/info-dark.png";
    gradcapIcon.src = "./assets/images/graduation-cap-dark.png";
    stackIcon.src = "./assets/images/layers-dark.png";
    linkedinFooterBtn.src = "./assets/images/linkedin-dark.png";
    githubFooterBtn.src = "./assets/images/github-dark.png";
    cards.forEach((card) => {
      card.classList.remove("dark-mode");
    });
    skillsContainer.forEach((skill) => {
      skill.classList.remove("dark-mode");
    });
    socials.forEach((social) => {
      social.classList.remove("dark-mode");
    });
  }
});

// Render tech stack
const renderStack = (selector, items) => {
  const container = document.querySelector(selector);
  if (container) {
    items.forEach((tech) => {
      container.innerHTML += `<span class="tech-stack">${tech}</span>`;
    });
  }
};

const renderProjects = () => {
  if (projectContainer) {
    let isDark = document.body.classList.contains("dark-mode");
    console.log(isDark);
    const projectIcon = isDark
      ? "./assets/images/panels-top-left-light.png"
      : "./assets/images/panels-top-left-dark.png";
    const createCard = (project) => `
      <div class="project cards rounded flex-fill d-flex flex-column ${isDark ? "dark-mode" : ""}">
        <img src="${project.image}" class="img-fluid" alt="${project.title}" style="object-fit: cover; width: 100%; height: 130px; border-radius: 8px;" />
       <div class="p-2">
        <h5 class="mt-1">${project.title}</h5>
        <p class="text-secondary description">${project.description}</p>
       <button class="project-link rounded mt-1"><a href="${project.link}" target="_blank" class="text-secondary text-decoration-none">View Project</a></button>
       </div>
      </div>`;

    projectContainer.innerHTML = `
    <h1 class="fw-bold d-flex gap-2 align-items-center fs-5"> <img class="icons project-icon"  src="${projectIcon}" class="icons" alt="" />Projects</h1>
      <div class="projects-grid gap-2 w-100">
        ${projects.map(createCard).join("")}
      </div>
    `;
  }
};
renderProjects();
renderStack(".frontend", techStack.frontend);
renderStack(".backend", techStack.backend);
renderStack(".tools", techStack.tools);
