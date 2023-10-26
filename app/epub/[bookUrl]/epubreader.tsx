"use client"
import React, { useEffect, useState } from "react";
import ePub, { Book } from "epubjs";

 const EpubReader = ({ epubFile }:{epubFile:any}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const initializeReader = async () => {
      const book = new Book(`/${epubFile}`, {});
      await book.open(`/${epubFile}`);


      const isLaptop = window.innerWidth > 768; // Adjust the screen width threshold as needed

      // Configure the `flow` based on the device type
      // const flow = isLaptop ? "scrolled-doc" : "scrolled-doc";

      const rendition = book.renderTo("reader", {
                flow: 'scrolled-doc',
        width: "900",
        height: "600",
        resizeOnOrientationChange: true,
      });
      const displayed = rendition.display();

      // Implement pagination controls
      const nextButton = document.getElementById("next-button");
      const prevButton = document.getElementById("prev-button");

      let touchStartX = 0;
      let touchEndX = 0;

      document?.getElementById("epub-reader")?.addEventListener("touchstart", (e) => {
        console.log('testing')
        touchStartX = e.touches[0].clientX;
      });

      document?.getElementById("epub-reader")?.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
          // Swipe left, navigate to the next page
          rendition.next();
        } else if (touchEndX - touchStartX > 50) {
          // Swipe right, navigate to the previous page
          rendition.prev();
        }
      });
    


      if(nextButton)
      nextButton.addEventListener("click", () => rendition.next());
    if(prevButton)
      prevButton.addEventListener("click", () => rendition.prev());

      setIsLoading(false);

    };
    
    if(isLoading===true)
    {
    initializeReader();
    }
   
  }, [isLoading]);

  return (
    <div className="epub-reader-container" id="epub-reader">

    
      <div className="book-content">
      {
    isLoading ? (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    ):
        (<div id="reader">{/* Your book content goes here */}</div>
  )
  }
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

export default EpubReader;
