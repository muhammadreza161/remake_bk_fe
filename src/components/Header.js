import React from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Logo from "./Logo";
// import Notice from "./Notice";

export default function Header() {
  return (
    <div>
      <header className="p-4 shadow">
        <div className="max-width flex items-center justify-between">
          <div>
            <button>
              <FaBars />
            </button>
          </div>

          <Logo />

          <ul className="flex items-center gap-4">
            <li>
              <button className="bg-orange text-white flex items-center gap-2 py-2 px-4 rounded-full font-bold text-sm">Sign Up</button>
            </li>
            <li>
              <button className="text-white flex items-center gap-2 py-2 px-4 rounded-full font-bold text-sm bg-[#502215]">
                <HiOutlineShoppingCart /> Cart
              </button>
            </li>
          </ul>
        </div>
      </header>
      {/* <Notice/> */}
    </div>
  );
}
