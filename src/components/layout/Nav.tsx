import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let loggedIn = false;

  return (
    <nav className="sticky top-0">
      <div className="w-screen h-20 relative z-10 bg-violet-700 flex items-center p-5 text-gray-200">
        <header className="flex">
          <div className=" transform -rotate-45 justify-center relative -top-2 z-10 cursor-pointer">
            <Image src="/assets/svgs/crown.svg" width={24} height={24} />
          </div>
          <h1 className="text-2xl font-medium text-gray-300 fixed left-8 top-6 cursor-pointer">
            Drag League
          </h1>
        </header>

        <div className="md:hidden fixed right-40 z-0 flex items-center justify-center">
          <div
            className=" cursor-pointer p-4 w-16 h-16 flex flex-col hover:bg-violet-800"
            onClick={toggleMenu}
          >
            <Image src="/assets/svgs/hamburger.svg" width={32} height={32} />
          </div>
        </div>

        <ul className="flex ml-auto invisible md:visible">
          <Link href="/">
            <li className="hover:bg-violet-800 p-4 cursor-pointer">Home</li>
          </Link>
          <Link href="/leagues">
            <li className="hover:bg-violet-800 p-4 cursor-pointer">
              Find A League
            </li>
          </Link>
          <Link href="/myleagues">
            <li className="hover:bg-violet-800 p-4 -mr-20 cursor-pointer">
              My Leagues
            </li>
          </Link>
        </ul>

        {loggedIn ? (
          <ul className="flex ml-auto">
            <li className="mx-1">
              <button className="bg-violet-500 text-gray-200 p-2 rounded-full cursor-pointer">
                GamingBuddhist
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex ml-auto">
            <li>
              <Link href="/login">
              <button className="bg-violet-500 text-gray-200 p-2 border border-violet-900 rounded-l-full text-sm cursor-pointer hover:bg-violet-800">
                Sign In
              </button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
              <button className="bg-violet-500 text-gray-200 p-2 border border-violet-900 rounded-r-full text-sm cursor-pointer hover:bg-violet-800">
                Sign Up
              </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div
        className={`w-screen fixed z-5 h-auto transition-transform ease-in-out duration-300 bg-violet-700 border-b-4 border-violet-400 flex items-center p-5 text-gray-200 cursor-pointer ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col text-center mx-auto w-screen">
          <Link href="/">
            <li className="p-3 hover:bg-violet-800 cursor-pointer">Home</li>
          </Link>
          <Link href="/leagues">
            <li className="p-3 hover:bg-violet-800 cursor-pointer">
              Find A League
            </li>
          </Link>
          <Link href="/myleagues">
            <li className="p-3 hover:bg-violet-800 cursor-pointer">
              My Leagues
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
