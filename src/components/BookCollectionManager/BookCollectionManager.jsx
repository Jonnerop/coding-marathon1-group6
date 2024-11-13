import './BookCollectionManager.css';
import React, { useState } from 'react';

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', year: (new Date().getFullYear()) });

  // Handle input change for both fields
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  }

  // Add a new book to the list
  function addBook() {
    if (newBook.title.trim() !== '' && newBook.author.trim() !== '') {
      setBooks((b) => [...b, newBook]);
      setNewBook({ title: '', author: '', year: (new Date().getFullYear()) }); // Clear the input fields
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  function moveBookUp(index) {
    if(index > 0) {
        const newBooks = [...books];
        [newBooks[index], newBooks[index - 1]] = 
        [newBooks[index - 1], newBooks[index]];
        setBooks(newBooks);
    }
  }

  function moveBookDown(index) {
    if(index < books.length - 1) {
        const newBooks = [...books];
        [newBooks[index], newBooks[index + 1]] = 
        [newBooks[index + 1], newBooks[index]];
        setBooks(newBooks);
    }
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter book title..."
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter author name..."
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Year of publication"
          name="year"
          value={newBook.year}
          onChange={handleInputChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author} published in {book.year}
            <div className="buttons">
            <button onClick={() => deleteBook(index)} className="deleteBtn">Delete</button>
            <button className="moveUp" onClick={() => moveBookUp(index)}>
              Up
            </button>
            <button className="moveDown" onClick={() => moveBookDown(index)}>
              Down
            </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;
