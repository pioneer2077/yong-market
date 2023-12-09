"use client";
import React from "react";
import { usePathname } from "next/navigation";
import ColorLink from "./ui/ColorLink";

export default function Nav() {
  const pathname = usePathname();
  const menu = [
    {
      name: "All",
      href: "/all",
      changedColor: "blue-500",
    },
    {
      name: "pants",
      href: "/1",
      changedColor: "blue-500",
    },
    {
      name: "shirts",
      href: "/2",
      changedColor: "blue-500",
    },
  ];
  return (
    <nav className="gap-6 font-medium flex ml-4">
      {menu.map((item) => (
        <ColorLink
          key={item.name}
          changedColor={item.changedColor}
          href={item.href}
          clicked={item.href === pathname}
          name={item.name}
        />
      ))}
    </nav>
  );
}
