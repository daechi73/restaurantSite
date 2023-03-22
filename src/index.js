import initialRender from "./initialPage";
import home from "./home";
import contact from "./contact";
import menu from "./menu";

initialRender();

const navBarLogic = (() => {
  const homeBtn = document.querySelector(".homeBtn");
  const menuBtn = document.querySelector(".menuBtn");
  const contactBtn = document.querySelector(".contactBtn");
  homeBtn.addEventListener("click", () => {
    home();
  });
  menuBtn.addEventListener("click", () => {
    menu();
  });
  contactBtn.addEventListener("click", () => {
    contact();
  });
})();
