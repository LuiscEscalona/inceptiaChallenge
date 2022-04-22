import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: {
    from: "2021-03-01",
    until: "2022-03-25"
  }
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setUntilDate: (state, action) => {
      state.date.until = action.payload;
    },
    setFromDate: (state, action) => {
      state.date.from = action.payload;
    }
  }
});

const { setUntilDate, setFromDate } = filtersSlice.actions;

export { setFromDate, setUntilDate };

export default filtersSlice.reducer;
