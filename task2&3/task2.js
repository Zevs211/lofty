// КОД НА ПРОМИСАХ
// const getJson = (url) => fetch(url).then((res) => res.json());

// getJson("/i/1.json")
//   .then((json) => {
//     if (json.key) {
//       return getJson("/i/2.json");
//     }
//     throw new Error("No key");
//   })

//   .then((json) => {
//     return json.key2;
//   })

//   .catch((error) => {
//     console.error(error);
//   });
//======================================================
// ПЕРЕПИСАННЫЙ НА ASYNC/AWAIT

const getJsonAsync = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

(async () => {
  try {
    const json = await getJsonAsync("/i/1.json");
    if (json.key) {
      json = await getJsonAsync("/i/2.json");
    } else {
      throw new Error("No key");
    }

    json = await json.key2;
  } catch (e) {
    console.log(e);
  }
})();
