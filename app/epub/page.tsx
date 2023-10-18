import React from "react";
import EpubListView from "./epublistview";

function App() {

  const sampleBooks = [
    {
      title: "The Immortals Of Meluha",
      epubFile: "amish.epub",
      imageUrl: "https://imgs.search.brave.com/-y9xbMg3xhk4eB9uAAR8hKSdouulbNdPwHQVZIB-hjY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE4/NTcvNjkzMS9wcm9k/dWN0cy90eVhnSFhE/TzN2XzMwMHguanBn/P3Y9MTYxOTk2NDEz/OQ",
      description: "The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth.",
    },
    {
      title: "The Oath Of Vayuputras",
      epubFile: "vayuputras.epub",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhs99sWtwrBG5Se-NilYH1lKp6JK6Emx74w&usqp=CAU",  
      description: "The Oath of the Vayuputras is the third book of Amish Tripathi, third book of Amishverse, and also the third book of Shiva Trilogy.",
    },
    {
      title: "The Secret Of Nagas",
      epubFile: "nagas.epub",
      imageUrl: "https://i.pinimg.com/474x/12/81/72/128172f769f4fee45602dd2c4d668a86.jpg",
      description: "The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva.",
    },
  
    
    // Add more books here
  ];
  


  return (
    <div className="App">
      <EpubListView books={sampleBooks}  />
    </div>
  );
}

export default App;
