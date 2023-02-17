import './App.css';
import FindForm from './components/FindForm'
import Navbar from './components/Navbar';
import DisplayBooks from './components/DisplayBooks';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  function fetchBooks(searchTerm){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}}&key=AIzaSyD5Uib4fwNhIB_s8fYbBDSQVFUJOgC1_bc`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setBooks( result.items)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <>
      {/* <Navbar /> */}
      <h1>hello bookworms!</h1>
      <h3>“That’s the thing about books. They let you travel without moving your feet.”</h3>
      <FindForm fetchBooks={fetchBooks}/>
      <DisplayBooks books={books}/>
      </>
      
    </div>
  );
}

export default App;
