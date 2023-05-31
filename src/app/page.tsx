'use client'
import Card from "@/components/Card";
import { useEffect, useState } from "react";

interface IQuote {
  author:string,
  text: string
}

export default function Home() {

  const [quote, setQuote] = useState('');



  return (
    <div>
      <h1>цитатка дня</h1>
      <Card quote={quote} />
    </div>
  )
}
