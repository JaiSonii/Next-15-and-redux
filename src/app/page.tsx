'use client'
import Header from "@/components/Header";
import Cardsdata from "@/sample/cardData";
import Cart from "@/components/Cart";
import { CartItem } from "@/utils/types";


export default function Home() {
  return (
    <div className="container bg-gray-100 antialiased">
      <Header />
      <Cart cartData={Cardsdata as CartItem[]} />
    </div>
  );
}
