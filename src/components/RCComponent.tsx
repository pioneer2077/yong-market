"use client";
import React, { use, useEffect } from "react";

export default function RCComponent() {
  const getData = async () => {
    const res = await fetch("https://localhost:8080/product").then((res) =>
      res.json()
    );
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>RCComponent</div>;
}
