import Link from "next/link";
import React from "react";
import IconButton from "./ui/IconButton";
import MarketLogoIcon from "./ui/icons/MarketLogoIcon";
import { SiMarketo } from "react-icons/si";
import ColorLink from "./ui/ColorLink";
import Nav from "./Nav";

export default function Header() {
  const menu = [
    {
      name: "home",
      href: "/",
      changedColor: "blue-500",
    },
    {
      name: "info",
      href: "/info",
      changedColor: "blue-500",
    },
    {
      name: "portfolio",
      href: "/portfolio",
      changedColor: "blue-500",
    },
    {
      name: "career",
      href: "/career",
      changedColor: "blue-500",
    },
  ];
  return (
    <header className="flex items-center p-4">
      <div className=" basis-1/3 flex items-center ">
        <div className="p-2 border-[1px] border-gray-200 rounded-md">
          <SiMarketo className="w-4 h-4" />
        </div>
        <h1 className=" text-sm font-semibold pl-2 pr-8">YONG STORE</h1>
        <Nav />
      </div>
      <div className=" basis-1/3">
        <input
          type="text"
          className="w-full outline-none p-1 border border-gray-200 rounded-md"
        />
      </div>
      <div className=" basis-1/3 flex justify-end">
        <div className="p-2 border-[1px] border-gray-200 rounded-md">
          <SiMarketo className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}
