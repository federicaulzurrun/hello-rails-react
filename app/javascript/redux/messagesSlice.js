import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  isLoading: false,
};

export const fetchRandomGreeting = createAsyncThunk(
  'messages/fetchRandomGreeting',
  async () => {
    const response = await fetch('/api/v1/greetings/random_greeting');
    const data = await response.json();
    return data;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload.greeting;
      })
      .addCase(fetchRandomGreeting.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default messagesSlice.reducer;
