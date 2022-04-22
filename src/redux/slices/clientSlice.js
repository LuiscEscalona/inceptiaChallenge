import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import thunkStates from "../thunkStates";

const initialState = {};

const BASE_URL = "https://admindev.inceptia.ai";

export const getClients = createAsyncThunk(
  "clients/getClients",
  async (_, { getState }) => {
    const {
      user: { profileData }
    } = getState();

    const config = {
      method: "GET",
      url: `${BASE_URL}/api/v1/clients/`,
      headers: {
        Authorization: `JWT ${profileData.token}`
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

export const getClientDetail = createAsyncThunk(
  "clients/getClientDetail",
  async (id, { getState }) => {
    const {
      user: { profileData },
      filters: { date }
    } = getState();
    const config = {
      method: "GET",
      url: `${BASE_URL}/api/v1/inbound-case/?client=${id}&local_updated_date_gte=${date.from}&local_updated_date_lte=${date.until}`,
      headers: {
        Authorization: `JWT ${profileData.token}`
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

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClients.fulfilled, (state, action) => {
      state.clients = action.payload.data;
      state.isLoading = thunkStates.FULFILLED;
    });
    builder.addCase(getClients.pending, (state, action) => {
      state.isLoading = thunkStates.PENDING;
    });
    builder.addCase(getClientDetail.fulfilled, (state, action) => {
      state.clientDetail = action.payload.data;
    });
  }
});

export default clientsSlice.reducer;
