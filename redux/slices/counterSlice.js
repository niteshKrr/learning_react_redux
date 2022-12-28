import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
    name: "nitesh",
    address: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    newaddress: (state, action) => {
      state.address = action.payload;
      //   console.log(state.address);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload.amount);
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, newaddress } =
  counterSlice.actions;
// this reducer will be passed in store's 'reducer' key
export default counterSlice.reducer;
