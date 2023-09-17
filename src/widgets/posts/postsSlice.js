import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    name: "Egwayu Boniface",
    content: "This friend of mine is a medical doctor",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    name: "Baluku Dan",
    content: "This friend of mine is a bio-medical Lab Technician",
    date: sub(new Date(), { minutes: 8 }).toISOString(),
  },
  {
    id: "3",
    name: "Atibuni Herbert",
    content: "This friend of mine is a petroleum Engineer",
    date: sub(new Date(), { minutes: 6 }).toISOString(),
  },
  {
    id: "4",
    name: "Isaac Wasukira",
    content: "This friend of mine is an accountant",
    date: sub(new Date(), { minutes: 4}).toISOString(),
  },
];

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriend:{
      reducer(state,action){
      state.push(action.payload)
    },
    prepare(name,content,userId){
      return{
        payload:{
          id:nanoid(),
          name,
          content,
          date:new Date().toISOString(),
          userId
        }
      }
    }
  }
  },
});

export const selectAllFriends=(state)=>state.friends;
export const {addFriend}=friendsSlice.actions
export default friendsSlice.reducer;
