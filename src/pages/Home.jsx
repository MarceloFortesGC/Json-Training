import React from "react";
import Data from "../data/data.json";
import Button from "../components/button/Registration_Button";
import "../styles.css";

export default function Header() {
  return (
    <>
      {Data.map((data) => (
        <>
          <div className="body-home">
            <Button txt={data.button.registration_button} />
          </div>
        </>
      ))}
    </>
  );
}
