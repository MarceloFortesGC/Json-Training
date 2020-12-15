import React from "react";
import Data from "../data/data.json";

export default function Textos() {
  return (
    <>
      {Data.map((data) => (
        <>
          <h1>{data.header.h1}</h1>
        </>
      ))}
    </>
  );
}
