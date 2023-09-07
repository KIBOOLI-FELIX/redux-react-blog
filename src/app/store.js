import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../widgets/posts/postsSlice";
export const store=configureStore({
  reducer:{
    friends:friendsReducer
  }
})