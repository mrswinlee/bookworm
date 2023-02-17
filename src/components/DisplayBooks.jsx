import React from 'react';
import BookCard from './BookCard'

function DisplayBooks( {books} ) {
    // receive the books as a prop
  return (
    <div>
      {books.map((book)=>{
          return <BookCard book={book} key={book.id} />
      })
      }
    </div>
  );
}

export default DisplayBooks;
