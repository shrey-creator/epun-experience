import { EpubReader } from "./epubreader";
import { ReactReader } from "react-reader";

export default function EPUB() {
  return (
    <div>
      <h1>EPUB Reader</h1>
      <EpubReader epubFile="amish.epub" />
    </div>
  );
}

//https://react-reader.metabits.no/files/alice.epub
