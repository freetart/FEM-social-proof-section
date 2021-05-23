import destructureData from "./destructureData.js";

const displayData = async () => {
  const users = await destructureData();

  const quoteImg = [...document.querySelectorAll(".quote__img")];
  const quoteName = [...document.querySelectorAll(".quote__name")];

  quoteImg.forEach((_, idx) => {
    quoteImg[idx].src = users[idx].img;
  });

  quoteName.forEach((_, idx) => {
    quoteName[
      idx
    ].textContent = `${users[idx].firstName} ${users[idx].lastName}`;
  });
};

export default displayData;
