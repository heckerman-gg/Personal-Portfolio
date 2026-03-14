const themeBtn = document.querySelector(".theme");
const dlCv = document.getElementById("cv-btn");
const githubBtn = document.querySelector(".github-btn");
const profilePic = document.querySelector(".pfp");
const cards = document.querySelectorAll(".cards");
const infoIcon = document.querySelector(".info-icon");
const gradcapIcon = document.querySelector(".gradcap-icon");
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
    cards.forEach((card) => {
      card.classList.add("dark-mode");
    });
  } else {
    themeBtn.innerHTML = "<img src='./assets/images/moon.png' alt='' />";
    themeBtn.style.borderColor = "#949595ff";
    themeBtn.style.backgroundColor = "#f1f2f3ff";
    profilePic.src = "./assets/images/light-mode-pfp.png";
    infoIcon.src = "./assets/images/info-dark.png";
    gradcapIcon.src = "./assets/images/graduation-cap-dark.png";
    cards.forEach((card) => {
      card.classList.remove("dark-mode");
    });
  }
});
