import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk('fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // ** This response.json() will automatically stored in action.payload!!
    return response.json()
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    // [extraReducres] used for asynchronous request.
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        });
    }
})

export default todoSlice.reducer;