import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "Baluku Dan" },
  { id: "1", name: "Egwayu Boniface" },
  { id: "2", name: "Atibuni Herbert" },
  { id: "3", name: "Wasukira Isaac" },
  { id: "4", name: "Nabuduwa Enid" },
];

const usersSlice=createSlice({
  name:'users',
  initialState,
  reducers:{}
})
export const selectAllUsers=(state)=>state.users;

const usersReducer= usersSlice.reducer;
export default usersReducer;

