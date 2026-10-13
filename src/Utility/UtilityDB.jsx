const checkDB = () => {
  const checkDbList = localStorage.getItem("readlist");

  if (checkDbList) {
    const storedDB = JSON.parse(checkDbList);
    return storedDB;
  } else {
    return [];
  }
};

const addToDB = (id) => {

  const storedDB = checkDB();

  if (storedDB.includes(id)) {
    alert("vai ami asi");
  } else {
    storedDB.push(id);
    const data = JSON.stringify(storedDB);
    localStorage.setItem("readlist", data);
  }
};

export {addToDB};