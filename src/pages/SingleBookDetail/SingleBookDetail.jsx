import React from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { addToDB } from "../../Utility/UtilityDB";

const SingleBookDetail = () => {
  const { bookId } = useParams();
  const bookData = useLoaderData();
  const Id = parseInt(bookId);
  const SingleBookData = bookData.find((book) => book.bookId === Id);
  console.log(SingleBookData);
  console.log(bookData);
  console.log(bookId);

  const handleMarkAsRead = (id) => {
   addToDB(id); 
  }

  const {
    image,
    bookName,
    author,
    totalPages,
    yearOfPublishing,
    review,
    rating,
    publisher,
    category,
    tags,
  } = SingleBookData;
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-10 mb-10">
        <div className="p-10 md:p-20 bg-[#131313]/5 md:w-1/2 flex justify-center ">
          <img src={image} alt={bookName} className="rounded-lg  max-h-[564px]" />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="text-2xl font-semibold border-b-2 pb-3 border-[#131313]/15">
            By : {author}
          </p>
          <p className="text-2xl font-semibold border-b-2 pb-3 border-[#131313]/15">
            {category}
          </p>
          <p className="text-lg">
            <span className="font-bold">Review :</span>
            {review}
          </p>
          <p className="text-lg border-b-2 pb-6 border-[#131313]/15">
            <span className="font-bold">
              Tag
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#131313]/5 text-[#23BE0A] font-normal px-3 py-1 rounded-full text-md ml-4"
                >
                  {`#${tag}`}
                </span>
              ))}
            </span>
          </p>

          <p className="text-lg">
            Number of Pages: <span className="font-bold">{totalPages}</span>
          </p>
          <p className="text-lg">
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
          <p className="text-lg">
            Year of Publishing: <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p className="text-lg">
            Rating: <span className="font-bold">{rating}</span>
          </p>

          <div className="flex gap-3 mt-3">
            <button onClick={() => handleMarkAsRead(Id)} className="btn bg-white text-[#23BE0A] border-[#23BE0A] rounded-lg hover:scale-105 transition-all duration-800ms">Mark as  Read</button>

          <button className="btn text-white rounded-lg bg-[#59C6D2] hover:scale-105 transition-all duration-800ms">Whishlist</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleBookDetail;
