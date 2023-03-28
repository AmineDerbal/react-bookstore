import React from 'react';

const BookLists = () => {
  const books = [
    {
      id: 1,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
    },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez' },
    {
      id: 4,
      title: 'In Cold Blood',
      author: 'Truman Capote',
    },
    {
      id: 5,
      title: 'Wide Sargasso Sea',
      author: 'Jean Rhys',
    },
    {
      id: 6,
      title: 'Brave New World',
      author: 'Aldous Huxley',
    },
  ];

  return (
    <div>
      {books.map((book) => (
        <p key={book.id}>
          <strong>{book.title}</strong>
          {' '}
          <span>by</span>
          {' '}
          <strong>{book.author}</strong>
        </p>
      ))}
    </div>
  );
};

export default BookLists;
