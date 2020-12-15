import React from "react";
import "../../styles.css";

function msg() {
  alert("Registrado com Sucesso");
}

export default function Registration_Button(props) {
  return (
    <>
      <div className="alert-button">
        <button onClick={msg}>{props.txt}</button>
      </div>
    </>
  );
}
