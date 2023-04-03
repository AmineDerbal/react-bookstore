import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  message: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      console.log(action);
      state.message = 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
