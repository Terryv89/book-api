import { useNavigate } from "react-router-dom";
import "./bookCard.css";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/oneBook/${book.title}`);
  };
  console.log(book);
  return (
    <div
      onClick={handleClick}
      style={{ background: book.color }}
      className="book-card"
    >
      <div className="book-cont">
        <h5 className="book-card-h4">{book.title}</h5>
        <h6 className="book-card-h4">{book.author}</h6>
      </div>
    </div>
  );
};

export default BookCard;
