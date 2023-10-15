import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Bookstore</h1>
      <div className="featured-book">
        <img src="featured-book-image.jpg" alt="Featured Book Cover" />
        <div className="featured-book-info">
          <h2>Featured Book Title</h2>
          <p>
            A brief description of the featured book goes here. You can provide
            some information about the book's author, genre, or a short summary.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
