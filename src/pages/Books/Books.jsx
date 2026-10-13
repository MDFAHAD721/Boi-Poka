import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [AllBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4 md:mb-10">Books</h1>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
         {AllBooks.map((book) => (
        <Book book={book} key={book.bookId} />
      ))}
     </div>
    </div>
  );
};

export default Books;
