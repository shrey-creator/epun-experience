// EpubListView.js

import React from "react";
import './epublistview.css'
import Link from "next/link";

const EpubListView = ({ books }:{ books :any}) => {


  return (
    <div className="epub-list-view">
      <h1>List of EPUB Books</h1>
      <div className="card-container">
        {books.map((book:any, index:any) => (
          <div className="card" key={index} >
        <Link href={`/epub/${book.epubFile}`}>

            <div className="card-image">
              <img src={book.imageUrl} alt={book.title} />
            </div>
            <div className="card-content">
              <h2>{book.title}</h2>
              <p>{book.description}</p>
            </div>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default EpubListView;
