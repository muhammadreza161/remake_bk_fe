"use client";

import Image from "next/image";
import React, { useState } from "react";
import card1 from "@/images/card1.jpg";
import card2 from "@/images/card2.jpg";
import card3 from "@/images/card3.jpg";
import card4 from "@/images/card4.jpg";
import card5 from "@/images/card5.jpg";
import card6 from "@/images/card6.jpg";

const cards = [
  {
    image: card1,
    title: "Pesta Merdeka",
    button: "Order",
  },
  {
    image: card2,
    title: "1pc Ayam Crispy + Nasi",
    button: "Order",
  },
  {
    image: card3,
    title: "Double Mantul",
    button: "Order",
  },
  {
    image: card4,
    title: "Special Menu",
    button: "Order",
  },
  {
    image: card5,
    title: "King JR Cheeseburger",
    button: "Order",
  },
  {
    image: card6,
    title: "Cheese Burger Favorite",
    button: "Order",
  },
];

export default function Grid() {
  const [card] = useState(cards);
  return (
    <>
      <div className="max-width py-20 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {card.map((c, index) => (
            <article key={index} className="bg-white rounded-lg shadow">
              <Image
                src={c.image}
                width={600}
                height={300}
                alt={c.title}
                className="rounded-t-lg"
              />
              <article className="p-4">
                <h2 className="lg:text-2xl mb-8">{c.title}</h2>

                <button className="block ml-auto bg-orange text-white gap-2 py-2 px-5 rounded-full font-bold">
                  {c.button}
                </button>
              </article>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
