import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import quizSlice from "./slice/quizSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    quiz: quizSlice
  },
});
export default store;