"use client"
import { useParams } from "next/navigation";
import EpubReader from "./epubreader";

export default function BookViewer() {

  const params = useParams();

  return (
      <EpubReader   epubFile={params.bookUrl} />
  
  );
}
