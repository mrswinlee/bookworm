import React from 'react';

function BookCard( {book} ) {
  return (
    <div>
        <h2>{book.volumeInfo.title}</h2>
        <img src={book.volumeInfo.imageLinks?.thumbnail} />

    </div>
  );
}

export default BookCard;
