import initialRender from "./initialPage";
import home from "./home";
import contact from "./contact";
import menu from "./menu";

initialRender();

const navBarLogic = (() => {
  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const contactBtn = document.querySelector(".contactBtn");
  const mainContent = document.querySelector(".main-content");

  homeBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    home();
  });
  menuBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    menu();
  });
  contactBtn.addEventListener("click", () => {
    mainContent.innerHTML = "";
    contact();
  });
})();
