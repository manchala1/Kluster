// src/components/BookDetailPage.js
import React, { useState, useEffect } from 'react';

const BookDetails = ({ match }) => {
  const bookId = match.params.id; // Extract book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {

    const sampleBook = {
      title: 'Sample Book Title',
      author: 'Sample Author',
      genre: 'Fiction',
      description: 'A brief description of the sample book.',
      coverUrl: 'sample-book-cover.jpg',
    };
    setBook(sampleBook);
  }, [bookId]);

  if (!book) {
    // Display a loading indicator or error message if the book data is not available yet
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <div className="book-details">
        <img src={book.coverUrl} alt={book.title} />
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.title}</p>
        <p>Description: {book.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
