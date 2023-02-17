import React from 'react';
import { useState } from 'react'

function FindForm( {fetchBooks} ) {
    const [text, setText ] = useState('');
    console.log(text);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert('please search for a book')
            return
        }
        fetchBooks(text);
    }

      return (
    <div>
            <h3>Tell us what book you would like to read today</h3>
            <form onSubmit={handleSubmit}>
                <div className='find-input'>
                    <input onChange={handleTextChange} type='text' placeholder='search book'/>
                    <button type='submit'>send</button>
                </div>
            </form>
    </div>
  );
}

export default FindForm;
