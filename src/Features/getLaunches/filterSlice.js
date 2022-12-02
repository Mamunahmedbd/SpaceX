import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rocketName: "",
  launchYear: "",
  launchSuccess: "",
  sortLaunch: "",
  currentPage: 1,
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleRocketName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.rocketName = action.payload;
      state.currentPage = 1;
    },
    handleLaunchYear: (state, action) => {
      state.launchYear = action.payload;
      state.currentPage = 1;
    },
    handlLaunchSuccess: (state, action) => {
      state.launchSuccess = action.payload;
      state.currentPage = 1;
    },
    handlSortLaunch: (state, action) => {
      state.sortLaunch = action.payload;
      state.currentPage = 1;
    },
    handleCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    handleSearchValue: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleRocketName,
  handleLaunchYear,
  handlLaunchSuccess,
  handlSortLaunch,
  handleCurrentPage,
  handleSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
