import preloader from "./preloader.js";
import displayData from "./displayData.js";

const init = () => {
  preloader();
  displayData();
};

window.addEventListener("DOMContentLoaded", init);
