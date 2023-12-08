"use client";
import React from "react";
type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
export default function IconButton({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
