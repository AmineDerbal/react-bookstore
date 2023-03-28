import React from 'react';

const AddBook = () => (
  <form>
    <input type="text" name="title" placeholder="title" />
    <input type="text" name="author" placeholder="author" />
    <button type="button">Add Book</button>
  </form>
);

export default AddBook;
