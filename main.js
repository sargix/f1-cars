const teamNameButtons = [...document.querySelectorAll("li a")];
const navbar = document.querySelector("nav");
const logo = document.querySelector(".header_img");
const teamNameHeader = document.querySelector(".team_name");
const modelNameH1 = document.querySelector(".main_h1");
const descrImg = document.querySelector(".section1_img");
const descrImg2 = document.querySelector(".section2_img");
const burger = document.querySelector(".burger");

const teamsCarModel = [
  "Mercedes-AMG F1 W12 E Performance",
  "Red Bull RB16B",
  "Ferrari SF21",
  " Mclaren MCL35M",
  "Aston Martin AMR21",
  "Alpine A521",
  "Alpha Tauri AT02",
  "Alfa Romeo C41",
  "Williams FW43B",
  "Haas VF-21",
];

const teamsNames = [
  "Mercedes AMG Petronas Formula 1 Team",
  "Red Bull Racing",
  "Scuderia Ferrari",
  "McLaren F1",
  "Aston Martin F1",
  "Alpine F1",
  "Scuderia Alpha Tauri",
  "Alfa Romeo Racing",
  "Williams F1",
  "Haas F1",
];

const imgHeaderHref = [
  "mercedes",
  "redbull",
  "ferrari",
  "mclaren",
  "astonmartin",
  "alpine",
  "alphatauri",
  "alfaromeo",
  "williams",
  "haas",
];

const changeTeam = (index) => {
  switch (index) {
    case 0:
      navbar.style.backgroundColor = "rgba(90, 186, 199, 0.6)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 1:
      navbar.style.backgroundColor = "rgba(22, 24, 95, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 2:
      navbar.style.backgroundColor = "rgba(255, 0, 0, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 3:
      navbar.style.backgroundColor = "rgba(255, 135, 0, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 4:
      navbar.style.backgroundColor = "rgba(65, 119, 45, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 5:
      navbar.style.backgroundColor = "rgba(0, 97, 248, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 6:
      navbar.style.backgroundColor = "rgba(225, 225, 225, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "black";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 7:
      navbar.style.backgroundColor = "rgba(153, 0, 0, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 8:
      navbar.style.backgroundColor = "rgba(2, 168, 234, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;

    case 9:
      navbar.style.backgroundColor = "rgba(182, 64, 81, 0.7)";
      teamNameButtons.forEach((button) => {
        button.style.color = "white";
      });
      logo.style.backgroundImage = `url('./images/logo/${imgHeaderHref[index]}.png')`;
      teamNameHeader.textContent = teamsNames[index];
      modelNameH1.textContent = teamsCarModel[index];
      descrImg.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}.png')`;
      descrImg2.style.backgroundImage = `url('./images/bolidy/${imgHeaderHref[index]}2.png')`;
      break;
  }
};

for (let i = 0; i < teamNameButtons.length; i++) {
  teamNameButtons[i].addEventListener("click", () => changeTeam(i));
}

document.querySelector(".down").addEventListener("click", () => {
  const height = window.innerHeight;
  window.scrollBy(height, height);
});

document.querySelector(".up").addEventListener("click", () => {
  const height = window.innerHeight;
  window.scrollBy(-height, -height);
});

const arrowUp = document.querySelector(".up");
const arrowDown = document.querySelector(".down");

window.addEventListener("scroll", () => {
  if (window.pageYOffset == 0) {
    if (!arrowUp.classList.contains("hide")) arrowUp.classList.add("hide");
  } else if (window.pageYOffset > 0) {
    if (window.pageYOffset > window.innerHeight * 1.5)
      arrowDown.classList.add("hide");
    else if (window.pageYOffset < window.innerHeight * 2)
      arrowDown.classList.remove("hide");
    arrowUp.classList.remove("hide");
  }
});

burger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  document.querySelector("i.fa-angle-up").classList.toggle("hidden");
  document.querySelector("i.fa-angle-down").classList.toggle("hidden");
  document.querySelector(".burger").classList.toggle("active");
});
