import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Features/api/apiSlice";
import filterSlice from "../Features/getLaunches/filterSlice";
// import authSliceReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterSlice,
    // conversations: conversationsSliceReducer,
    // messages: mesagesSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
