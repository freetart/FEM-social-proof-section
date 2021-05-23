"use strict";

const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloaderEl.classList.add("hide-preloader");
  });
};
preloader();

const getData = async () => {
  try {
    const URL = "https://randomuser.me/api/?results=3";
    const res = await fetch(URL);
    const { results } = await res.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const destructureData = async () => {
  const results = await getData();

  const users = results.map((user) => {
    const img = user.picture.large;
    const firstName = user.name.first;
    const lastName = user.name.last;

    return { img, firstName, lastName };
  });

  return users;
};

const displayData = async () => {
  const users = await destructureData();

  const quoteImg = [...document.querySelectorAll(".quote__img")];
  const quoteName = [...document.querySelectorAll(".quote__name")];

  for (let i = 0; i < quoteImg.length; i++) {
    quoteImg[i].src = users[i].img;
  }

  for (let j = 0; j < quoteName.length; j++) {
    quoteName[j].textContent = `${users[j].firstName} ${users[j].lastName}`;
  }
};
displayData();
