const initialRender = () => {
  const body = document.body;
  const content = document.querySelector("#content");
  //header
  const header = document.createElement("div");
  const nameOfRestaurant = document.createElement("div");
  const navBar = document.createElement("div");
  const homeBtn = document.createElement("div");
  const menuBtn = document.createElement("div");
  const contactBtn = document.createElement("div");
  header.classList.add("header");
  nameOfRestaurant.classList.add("restoName");
  navBar.classList.add("navbar");
  homeBtn.textContent = "Home";
  homeBtn.classList.add("homeBtn");
  menuBtn.textContent = "Menu";
  menuBtn.classList.add("menuBtn");
  contactBtn.textContent = "Contact";
  contactBtn.classList.add("contactBtn");
  nameOfRestaurant.textContent = "The Cave";

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);
  header.appendChild(nameOfRestaurant);
  header.appendChild(navBar);

  body.style.textAlign = "center";
  nameOfRestaurant.style.fontSize = "30px";
  navBar.style.display = "grid";
  navBar.style.gridTemplateColumns = "1fr 1fr 1fr";
  navBar.style.marginTop = "50px";

  document.querySelector("#content").appendChild(header);

  //main-content
  const mainContent = document.createElement("div");

  mainContent.classList.add("main-content");
  mainContent.textContent = "stuff goes here...";
  mainContent.style.height = "70vh";
  mainContent.style.display = "grid";
  mainContent.style.alignContent = "center";
  content.appendChild(mainContent);
};

export default initialRender;
