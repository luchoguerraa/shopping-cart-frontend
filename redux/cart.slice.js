import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {

        state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;
