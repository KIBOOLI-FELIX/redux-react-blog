import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Egwayu Boniface",
    content: "This friend of mine is a medical doctor",
  },
  {
    id: "2",
    name: "Baluku Dan",
    content: "This friend of mine is a bio-medical Lab Technician",
  },
  {
    id: "3",
    name: "Atibuni Herbert",
    content: "This friend of mine is a petroleum Engineer",
  },
  {
    id: "4",
    name: "Isaac Wasukira",
    content: "This friend of mine is an accountant",
  },
];

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
});

export const selectAllFriends=(state)=>state.friends;
export default friendsSlice.reducer;
