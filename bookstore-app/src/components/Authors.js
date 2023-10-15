import React, { useState, useEffect } from 'react';

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [authorBooks, setAuthorBooks] = useState([]);

  useEffect(() => {
    // Fetch authors data from your API or database
    // Example API call:
    // fetch('/api/authors')
    //   .then((response) => response.json())
    //   .then((data) => setAuthors(data));
    // Replace the example fetch with your data source

    // For now, let's use sample data:
    const sampleAuthors = [
      { id: 1, name: 'Author 1' },
      { id: 2, name: 'Author 2' },
      // Add more authors here
    ];
    setAuthors(sampleAuthors);
  }, []);

  useEffect(() => {
    if (selectedAuthor !== null) {
      // Fetch books by the selected author from your API or database
      // Example API call:
      // fetch(`/api/authors/${selectedAuthor}/books`)
      //   .then((response) => response.json())
      //   .then((data) => setAuthorBooks(data));
      // Replace the example fetch with your data source

      // For now, let's use sample data:
      const sampleBooks = [
        {
            "isbn":"9781484200766",
            "title":"Pro Git",
            "subtitle":"Everything you neeed to know about Git",
            "author":"Scott Chacon and Ben Straub",
            "published":"2014-11-18T00:00:00.000Z",
            "publisher":"Apress; 2nd edition",
            "pages":458,
            "description":"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
            "website":"https://git-scm.com/book/en/v2"
        },
        {
            "isbn":"9781484242216",
            "title":"Rethinking Productivity in Software Engineering",
            "subtitle":"",
            "author":"Caitlin Sadowski, Thomas Zimmermann",
            "published":"2019-05-11T00:00:00.000Z",
            "publisher":"Apress",
            "pages":310,
            "description":"Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
        }    
        // Add more books here
      ];
      setAuthorBooks(sampleBooks);
    }
  }, [selectedAuthor]);

  const showAuthorBooks = (authorId) => {
    setSelectedAuthor(authorId);
  };

  return (
    <div className="authors">
      <h1>Authors</h1>
      <div className="author-list">
        {authors.map((author) => (
          <div key={author.id} className="author">
            <button onClick={() => showAuthorBooks(author.id)}>
              {author.name}
            </button>
          </div>
        ))}
      </div>
      {selectedAuthor !== null && (
        <div className="author-books">
          <h2>Books by Selected Author</h2>
          <ul>
            {authorBooks.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Authors;
