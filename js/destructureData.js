import getData from "./getData.js";

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

export default destructureData;
