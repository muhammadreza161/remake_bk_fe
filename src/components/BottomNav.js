"use client";

import React from "react";
import Link from "next/link";
import {GoHomeFill} from "react-icons/go"
import {IoFastFood} from "react-icons/io5"
import {FaAward} from "react-icons/fa"
import {FaCoins} from "react-icons/fa"


export default function BottomNav() {
  return (
    <>
      <nav>
        <ul className="flex flex-wrap items-center justify-evenly p-4 shadow">
          <li className="text-sm">
            <Link href="/"> <GoHomeFill className="text-2xl" /> Home </Link>
          </li>
          <li className="text-sm">
            <Link href="/menu"> <IoFastFood/> Menu </Link>
          </li>
          <li className="text-sm">
            <Link href="/my-code"> <FaCoins/> Offers </Link>
          </li>
          <li className="text-sm">
            <Link href="/offers"> <FaAward  /> Rewards </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
