import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

const render = () => {
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
reportWebVitals();
