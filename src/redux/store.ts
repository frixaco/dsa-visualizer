import { configureStore } from "@reduxjs/toolkit";
import binarySearchReducer from "./binarySearchReducer";

const store = configureStore({
  reducer: {
    binarySearch: binarySearchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
