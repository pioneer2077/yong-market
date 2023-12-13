import Link from "next/link";
import React from "react";
import { SiMarketo } from "react-icons/si";
import Nav from "./Nav";
import { IoIosCart } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import RCComponent from "./RCComponent";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <RCComponent />
      <div className=" basis-1/3 flex items-center">
        <Link
          href={"/"}
          className="md:hidden p-2 border border-gray-200 rounded-md "
        >
          <SiMarketo className="w-4 h-4" />
        </Link>

        <div className=" hidden md:flex items-center">
          <Link href={"/"} className="p-2 border border-gray-200 rounded-md ">
            <SiMarketo className="w-4 h-4" />
          </Link>
          <h1 className="hidden lg:flex  text-sm font-semibold pl-2 pr-6 ">
            YONG STORE
          </h1>
          <Nav />
        </div>
      </div>
      <div className=" basis-1/3 flex justify-center">
        <Link
          href={"/"}
          className="md:hidden p-2 border border-gray-200 rounded-md "
        >
          <SiMarketo className="w-4 h-4" />
        </Link>
        <div className="w-full hidden items-center border-gray-200 border pr-4 rounded-md  md:flex ">
          <input
            type="text"
            className="w-full outline-none py-2 ml-3 text-sm "
            placeholder="Search for products"
          />
          <FaMagnifyingGlass />
        </div>
      </div>
      <div className="basis-1/3 flex justify-end">
        <Link href={"/"} className="p-2 border border-gray-200 rounded-md ">
          <IoIosCart className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
