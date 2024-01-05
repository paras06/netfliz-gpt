import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesRedcuer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesRedcuer,
  },
});

export default appStore;
