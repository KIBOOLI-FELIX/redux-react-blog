import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "../widgets/posts/postsSlice";
import usersReducer from "../widgets/users/usersSlice";
export const store=configureStore({
  reducer:{
    friends:friendsReducer,
    users:usersReducer,
  }
})