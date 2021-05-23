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

export default getData;
