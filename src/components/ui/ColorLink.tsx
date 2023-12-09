import Link from "next/link";
import React from "react";
type Props = {
  href: string;
  clicked: boolean;
  changedColor: string;
  name: string;
};
export default function ColorLink({
  href,
  clicked,
  changedColor,
  name,
}: Props) {
  return (
    <Link
      href={href}
      className={`${(clicked && `text-${changedColor} `) || `text-gray-500`} `}
    >
      {name}
    </Link>
  );
}
