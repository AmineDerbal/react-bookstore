import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Loader from './Loader';
import { getBooksData } from '../redux/books/booksSlice';

const BookLists = () => {
  const {
    books, isLoading, error, ifSuccess,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksData());
  }, [dispatch, ifSuccess]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) return <h2>An error has occured</h2>;
  if (books.length === 0) return <h2>there are no books</h2>;
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookLists;
