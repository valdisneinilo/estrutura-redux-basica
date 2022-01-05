const localStorage = (store) => (next) => (action) => {
  const result = next(action);

  if (action.localStorage !== undefined) {
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload)
    );
  }
  return result;
};

export default localStorage;
