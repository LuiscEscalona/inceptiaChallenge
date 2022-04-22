import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import clientsReducer from "./slices/clientSlice";
import filtersReducer from "./slices/filtersSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		clients: clientsReducer,
		filters: filtersReducer
	}
});

export default store;
