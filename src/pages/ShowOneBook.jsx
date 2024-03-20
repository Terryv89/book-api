import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ShowOneBook = () => {
  const params = useParams();
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
        );
        const data = await response.json();
        console.log(data);

        const foundBook = data.filter((book) => book.title === params.title);
        setBooks(foundBook[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  return (
    <main className="one-book-cont">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ background: books?.color }} className="book-card">
          <div className="book-cont">
            <h6 className="book-card-h4">{books?.title}</h6>
            <h6 className="book-card-h4">{books?.author}</h6>
          </div>
        </div>
      )}
      <section className="one-book-info">
        <h2>{books.title}</h2>
        <p>{books.author}</p>
        <p>{books.plot}</p>
        <div> audience, firstpub, pages, pub</div>
      </section>
    </main>
  );
};

export default ShowOneBook;
