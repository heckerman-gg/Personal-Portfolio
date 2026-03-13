const themeBtn = document.querySelector(".theme");
const dlCv = document.getElementById("cv-btn");
const profilePic = document.querySelector(".pfp");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = "<img src='./assets/images/sun.png' alt='' />";
    themeBtn.style.borderColor = "#414144ff";
    themeBtn.style.backgroundColor = "#1f1f23ff";
    profilePic.src = "./assets/images/night-mode-pfp.png";
  } else {
    themeBtn.innerHTML = "<img src='./assets/images/moon.png' alt='' />";
    themeBtn.style.borderColor = "#f1f2f3ff";
    themeBtn.style.backgroundColor = "#f1f2f3ff";
    profilePic.src = "./assets/images/light-mode-pfp.png";
  }
});
