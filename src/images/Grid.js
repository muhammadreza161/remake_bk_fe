"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import card1 from "@/images/card1.jpg"
import card2 from "@/images/card2.jpg"
import card3 from "@/images/card3.jpg"
import card4 from "@/images/card4.jpg"

const cards = [
    {
        image: card1,
        title: "Pesta Merdeka",
        button: "Order"
    },
    {
        image: card2,
        title: "Pesta Merdeka",
        button: "Order"
    },
    {
        image: card3,
        title: "Pesta Merdeka",
        button: "Order"
    },
    {
        image: card4,
        title: "Pesta Merdeka",
        button: "Order"
    }
]

export default function Grid() {
    const [card] = useState(cards)
  return (
    <>
    <div className='max-width py-20 px-4'>
        {card.map((c, index) => (
            <article key={index}>
                <Image src={c.image}  width={500} height={300} alt={c.title} />
                <article>
                    <button>{c.link}</button>

                    <button>{c.button}</button>
                </article>
            </article>
        ))}

    </div>
      
    </>
  )
}
