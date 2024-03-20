import BookCard from "../component/book/BookCard";
import { useState, useEffect } from "react";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
        );
        const data = await response.json();
        console.log(data.books);
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  const booksComponent = books.map((book) => (
    <BookCard key={book.id} book={book} />
  ));
  return (
    <main>
      <h1>Library</h1>
      <h3>8 Classic Childrens books</h3>
      <main className="main-cont">
        {loading ? <p>Loading...</p> : booksComponent}
      </main>
    </main>
  );
};

export default Library;
