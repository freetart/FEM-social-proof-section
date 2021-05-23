import destructureData from "./destructureData.js";

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

export default displayData;
