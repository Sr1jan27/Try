import React, { useState } from "react";

export default function TextForm(props) {
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const handleRevClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = reverseString(text) ;
    setText(newText);
    props.showAlert("Converted to Reversed String","success");
  };

  const handleOnChange = (event) => {
    // console.log("On CHange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = hello mera naam  munni hai ;//wrong way to set text or update text
  //correct way to update text in USESTATE is by using the function name given in brackets

  // setText("mera naam munni hai ");

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor : props.mode==='dark'?'#878787':'light' , color:props.mode==='dark'?'white':'smokeWhite'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success " onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-4" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-success mx-1" onClick={handleRevClick}>
          Reverse the text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4 className="text-success-emphasis">Your text summary </h4>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {text.split(" ").length*0.008} Minutes read is required</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in textbox to preview it here"}</p>
      </div>
    </>
  );
}
