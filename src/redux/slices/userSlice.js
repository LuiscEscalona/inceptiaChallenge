import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import thunkStates from "../thunkStates";

const initialState = {
	profileData: {},
	isLoading: null
};

const BASE_URL = "https://admindev.inceptia.ai";

export const getUser = createAsyncThunk(
	"user/getUser",
	async ({ email, password }) => {
		console.log(email, password);
		const config = {
			method: "POST",
			url: `${BASE_URL}/api/v1/login/`,
			data: {
				email,
				password
			}
		};

		try {
			const data = await axios(config);
			return data;
		} catch (err) {
			console.error(err);
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUser.fulfilled, (state, action) => {
			state.profileData = action.payload.data;
			state.isLoading = thunkStates.FULFILLED;
		});
		builder.addCase(getUser.pending, (state, action) => {
			state.isLoading = thunkStates.PENDING;
		});
	}
});

export default userSlice.reducer;
