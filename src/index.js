import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = configureStore({reducer: {reducers}}, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <App />
  </Provider>
);
