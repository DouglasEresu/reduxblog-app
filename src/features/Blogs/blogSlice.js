import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// array of todos, loading, error
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const fetchBlogsAPI = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const  data  = await res.json();
  // return data;
  console.log(data)
};


const fetchBlogAPI = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`);
  const data = await res.json();
  return data;
};

export const blogSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload.message;
    });

    
    builder.addCase(fetchBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload.message;
    });
  },
});

export const fetchData = createAsyncThunk(
  "data/posts",
  async (_, thunkAPI) => {
    try {
      const data = await fetchBlogsAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchBlog = createAsyncThunk(
  "data/posts/id",
  async (id, thunkAPI) => {
    try {
      const data = await fetchBlogAPI(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const { reset } = blogSlice.actions;

export const blogsSelector = (state) => state.data;

export default blogSlice.reducer;