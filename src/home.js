const home = () => {
  const mainContent = document.querySelector(".main-content");

  const info = document.createElement("div");
  info.classList.add("infoSection");
  info.innerHTML = `<p>Welcome to The Cave </p>
   <p>We make what you've been craving since the beginning of time</p>
  `;
  mainContent.appendChild(info);
  //content.textContent = "home..."
};

export default home;
