let state = reactive({ message: "Hellow Ludis" });

function renderApp() {
  render("#container", `<h1>${state.message}</h1>`);
}

renderApp();

setTimeout(() => {
  state.message = "Hello";
}, 1000);
