const render = (element, content) => {
  const app = document.querySelector(element);
  if (app !== null) {
    app.innerHTML = content;
  }
};

const reactive = (obj) => {
  const reactiveObj = {};

  Object.keys(obj).forEach((key) => {
    let value = obj[key];

    Object.defineProperty(reactiveObj, key, {
      get() {
        console.log("Getting value of", key);
        return value;
      },
      set(newValue) {
        console.log("Setting value of", key, "to", newValue);
        value = newValue;
        renderApp();
      },
    });
  });

  return reactiveObj;
};