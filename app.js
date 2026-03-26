import { projects, techStack } from "./data.js";

const themeBtn = document.querySelector(".theme");
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
const pfpContainer = document.querySelector(".profile-img-container");

const renderVideo = () => {
  const isDark = document.body.classList.contains("dark-mode");
  if (!isDark) {
    pfpContainer.innerHTML = `<video src="./assets/images/with-shades.mp4" class="pfp-video" autoplay muted></video>`;

    const pfpVideo = document.querySelector(".pfp-video");

    const playOnce = () => {
      pfpVideo.play();
      pfpVideo.removeEventListener("mouseenter", playOnce); // disable hover after first play
    };

    pfpVideo.addEventListener("mouseenter", playOnce);

    pfpVideo.addEventListener("ended", () => {
      pfpContainer.innerHTML = `<img src="./assets/images/with-shades.png" class="pfp-img" />`;
    });
  } else {
    pfpContainer.innerHTML = `<video src="./assets/images/removing_his_shades_and_background_turn_night.mp4" class="pfp-video" autoplay muted></video>`;

    const pfpVideo = document.querySelector(".pfp-video");

    const playOnce = () => {
      pfpVideo.play();
      pfpVideo.removeEventListener("mouseenter", playOnce); // disable hover after first play
    };

    pfpVideo.addEventListener("mouseenter", playOnce);

    pfpVideo.addEventListener("ended", () => {
      pfpContainer.innerHTML = `<img src="./assets/images/night-mode-pfp.png" class="pfp-img" />`;
    });
  }
};

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = "<img src='./assets/images/sun.png' alt='' />";
    themeBtn.style.borderColor = "#414144ff";
    themeBtn.style.backgroundColor = "#1f1f23ff";

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

    // profilePic.addEventListener("mouseover", () => {
    //   profilePic.src = "./assets/images/night-mode-pfp.png";
    // });
    // profilePic.addEventListener("mouseout", () => {
    //   profilePic.src = "./assets/images/pfp-sleeping.png";
    // });

    renderProjects();
    renderVideo();
  } else {
    themeBtn.innerHTML = "<img src='./assets/images/moon.png' alt='' />";
    themeBtn.style.borderColor = "#949595ff";
    themeBtn.style.backgroundColor = "#f1f2f3ff";
    // profilePic.src = "./assets/images/light-mode-pfp.png";
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

    renderProjects();
    renderVideo();
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
    const isDark = document.body.classList.contains("dark-mode");
    const projectIcon = isDark
      ? "./assets/images/panels-top-left-light.png"
      : "./assets/images/panels-top-left-dark.png";
    const createCard = (project) => `
      <div class="project cards rounded flex-fill d-grid ${isDark ? "dark-mode" : ""}" style="grid-template-rows: 130px 1fr;">
        <img src="${project.image}" alt="${project.title}" style="object-fit: contain; width: 100%; height: 100%; border-radius: 8px 8px 0 0;" />
       <div class="p-2 d-flex flex-column justify-content-between">
         <div>
          <h6 class="mt-1">${project.title}</h6>
          <p class="text-secondary description"><small>${project.description}</small></p>
         </div>
         <button class="project-link ${isDark ? "dark-mode border-secondary" : ""} rounded mt-auto"><a href="${project.link}" target="_blank" class="text-secondary text-decoration-none">View Project</a></button>
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
renderVideo();
renderProjects();
renderStack(".frontend", techStack.frontend);
renderStack(".backend", techStack.backend);
renderStack(".tools", techStack.tools);

// Time section functionality
const updateTime = () => {
  const timeEl = document.getElementById("current-time");
  const dateEl = document.getElementById("current-date");
  if (timeEl && dateEl) {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    dateEl.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
};
updateTime();
setInterval(updateTime, 1000);
