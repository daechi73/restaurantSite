"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurantsite"] =
  self["webpackChunkrestaurantsite"] || []).push([
  ["main"],
  {
    /***/ "./src/contact.js":
      /*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n  const content = document.querySelector(".main-content");\n\n  content.innerHTML = "contact...";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://restaurantsite/./src/contact.js?'
        );

        /***/
      },

    /***/ "./src/home.js":
      /*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n  const mainContent = document.querySelector(".main-content");\n\n  const info = document.createElement("div");\n  info.classList.add("infoSection");\n  info.innerHTML = `<p>Welcome to The Cave </p>\n   <p>We make what you\'ve been craving since the beginning of time</p>\n  `;\n  mainContent.appendChild(info);\n  //content.textContent = "home..."\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurantsite/./src/home.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPage */ "./src/initialPage.js");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");\n\n\n\n\n\n(0,_initialPage__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\nconst navBarLogic = (() => {\n  const homeBtn = document.querySelector(".homeBtn");\n  const menuBtn = document.querySelector(".menuBtn");\n  const contactBtn = document.querySelector(".contactBtn");\n  const mainContent = document.querySelector(".main-content");\n\n  homeBtn.addEventListener("click", () => {\n    mainContent.innerHTML = "";\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();\n  });\n  menuBtn.addEventListener("click", () => {\n    mainContent.innerHTML = "";\n    (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();\n  });\n  contactBtn.addEventListener("click", () => {\n    mainContent.innerHTML = "";\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  });\n})();\n\n\n//# sourceURL=webpack://restaurantsite/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/initialPage.js":
      /*!****************************!*\
  !*** ./src/initialPage.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");\n\n\nconst initialRender = () => {\n  const body = document.body;\n  const content = document.querySelector("#content");\n  //header\n  const header = document.createElement("div");\n  const nameOfRestaurant = document.createElement("div");\n  const navBar = document.createElement("div");\n  const homeBtn = document.createElement("div");\n  const menuBtn = document.createElement("div");\n  const contactBtn = document.createElement("div");\n  header.classList.add("header");\n  nameOfRestaurant.classList.add("restoName");\n  navBar.classList.add("navbar");\n  homeBtn.textContent = "Home";\n  homeBtn.classList.add("homeBtn");\n  menuBtn.textContent = "Menu";\n  menuBtn.classList.add("menuBtn");\n  contactBtn.textContent = "Contact";\n  contactBtn.classList.add("contactBtn");\n  nameOfRestaurant.textContent = "The Cave";\n\n  navBar.appendChild(homeBtn);\n  navBar.appendChild(menuBtn);\n  navBar.appendChild(contactBtn);\n  header.appendChild(nameOfRestaurant);\n  header.appendChild(navBar);\n\n  body.style.textAlign = "center";\n  nameOfRestaurant.style.fontSize = "30px";\n  navBar.style.display = "grid";\n  navBar.style.gridTemplateColumns = "1fr 1fr 1fr";\n  navBar.style.marginTop = "50px";\n\n  document.querySelector("#content").appendChild(header);\n\n  //main-content\n  const mainContent = document.createElement("div");\n\n  mainContent.classList.add("main-content");\n  mainContent.style.height = "70vh";\n  mainContent.style.display = "grid";\n  mainContent.style.alignContent = "center";\n  content.appendChild(mainContent);\n\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialRender);\n\n\n//# sourceURL=webpack://restaurantsite/./src/initialPage.js?'
        );

        /***/
      },

    /***/ "./src/menu.js":
      /*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const content = document.querySelector(".main-content");\n\n  content.innerHTML = "menu...";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurantsite/./src/menu.js?'
        );

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ var __webpack_exports__ = __webpack_exec__("./src/index.js");
    /******/
  },
]);
