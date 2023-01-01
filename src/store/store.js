import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  // Add your reducers here
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
