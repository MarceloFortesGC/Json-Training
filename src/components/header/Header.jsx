import React from "react";
import Data from "../../data/data.json";
import "../../styles.css";

export default function Header() {
  return (
    <>
      {Data.map((data) => (
        <>
          <div className="header">
            <a href="#">{data.header.home}</a>
            <a href="#">{data.header.pag1}</a>
          </div>
        </>
      ))}
    </>
  );
}
