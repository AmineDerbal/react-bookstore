import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const urlEndPoint = 'RFxxJwmoRBEoRgECVtEq/books/';
const url = baseUrl + urlEndPoint;

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  ifSuccess: false,
};

const changeToObjectData = (data) => {
  const newDataArray = [];
  data.forEach((element) => {
    const newObject = {
      id: element[0],
      title: element[1][0].title,
      author: element[1][0].author,
      category: element[1][0].category,
    };
    newDataArray.push(newObject);
  });
  return newDataArray;
};

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  try {
    const dataStream = await axios(url);
    let data = Object.entries(dataStream.data);
    data = changeToObjectData(data);
    return data;
  } catch (error) {
    return error;
  }
});

export const postBookToApi = createAsyncThunk('books/postBookToApi', async ({ id, title, author }) => {
  try {
    const dataStream = await axios.post(url, {
      item_id: id,
      title,
      author,
      category: 'fiction',
    });
    return dataStream;
  } catch (err) {
    return err;
  }
});

export const deleteBookFromApi = createAsyncThunk('books/deleteBookFromApi', async (id) => {
  try {
    const dataStream = await axios.delete(url + id);
    return dataStream;
  } catch (err) {
    return err;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooksData.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(getBooksData.fulfilled, (state, action) => {
      const isLoading = false;
      const books = action.payload;
      return {
        ...state,
        books,
        isLoading,
      };
    });
    builder.addCase(getBooksData.rejected, (state) => {
      const isLoading = false;
      const error = true;
      return {
        ...state,
        isLoading,
        error,
      };
    });
    builder.addCase(postBookToApi.pending, (state) => {
      const ifSuccess = false;
      return {
        ...state,
        ifSuccess,
      };
    });
    builder.addCase(postBookToApi.fulfilled, (state) => {
      const ifSuccess = true;
      return {
        ...state,
        ifSuccess,
      };
    });
    builder.addCase(postBookToApi.rejected, (state) => {
      const ifSuccess = false;
      return {
        ...state,
        ifSuccess,
      };
    });
    builder.addCase(deleteBookFromApi.pending, (state) => {
      const ifSuccess = false;
      return {
        ...state,
        ifSuccess,
      };
    });
    builder.addCase(deleteBookFromApi.fulfilled, (state) => {
      const ifSuccess = true;
      return {
        ...state,
        ifSuccess,
      };
    });
    builder.addCase(deleteBookFromApi.rejected, (state) => {
      const ifSuccess = false;
      return {
        ...state,
        ifSuccess,
      };
    });
  },
});

export default booksSlice.reducer;
