function getLocalStorage(key, inital) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return inital;
  }
}


export default getLocalStorage;