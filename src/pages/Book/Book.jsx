import React, { use } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    category,
    image,
    rating,
    review,
    publisher,
    totalPages,
    yearOfPublishing,
  } = book;
 
  return (
    <Link to={`/SingleBookDetail/${bookId}`}>
      <div className="p-5 border-2 rounded-xl border-[#23BE0A] shadow-xl hover:scale-105 transition-all duration-300">
        <div className="w-full card">
          <figure className="bg-base-300 py-4 rounded-xl shadow-xl ">
            <img
              className="h-41.5 rounded-lg  hover:scale-110 transition-all duration-300"
              src={image}
              alt={bookName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <div className="badge bg-[#23BE0A] text-white p-4">
              By : {author}
            </div>
            <div className="badge bg-[#23BE0A] text-white px-4 py-2 h-auto">
              Publisher : {publisher}
            </div>
            {/* <p>
            review : {review}
          </p> */}
            <div className="card-actions justify-between">
              <div className="font-bold">{category}</div>
              <div className="flex items-center font-bold gap-2">
                {rating} <IoIosStarOutline />
              </div>
            </div>
            <div className="card-actions justify-between">
              <div className="flex items-center gap-2 font-bold">
                Total Pages :{totalPages}
              </div>
              <div className="font-bold">
                Publishing Year :{yearOfPublishing}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
