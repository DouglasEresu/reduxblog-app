import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/Blogs/blogSlice'


export const store = configureStore({
  reducer: {
    data: blogsReducer
    
  },
});
