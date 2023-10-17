"use client";
import React, { useEffect } from "react";
import ePub, { Book } from "epubjs";

export const EpubReader = ({ epubFile }) => {
  useEffect(() => {
    console.log("initiales");

    const initializeReader = async () => {
      const book = new Book(epubFile, {});
      await book.open(epubFile);

      const isLaptop = window.innerWidth > 768; // Adjust the screen width threshold as needed

      // Configure the `flow` based on the device type
      const flow = isLaptop ? "paginated" : "scrolled-doc";

      const rendition = book.renderTo("reader", {
                flow: flow,
        width: "900",
        height: "600",
        resizeOnOrientationChange: true,
      });

      const displayed = rendition.display();

      // Implement pagination controls
      const nextButton = document.getElementById("next-button");
      const prevButton = document.getElementById("prev-button");

      nextButton.addEventListener("click", () => rendition.next());
      prevButton.addEventListener("click", () => rendition.prev());
    };

    initializeReader();
  }, [epubFile]);

  return (
    <div className="epub-reader-container">
      <div className="book-content">
        <div id="reader">{/* Your book content goes here */}</div>
        <div className="book-controls">
          <button id="prev-button" className="arrow-button">
            &lt; {/* Left arrow symbol */}
          </button>
          <button id="next-button" className="arrow-button">
            &gt; {/* Right arrow symbol */}
          </button>
        </div>
      </div>
    </div>
  );
};
