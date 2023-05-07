import React, { useState } from "react";

export default function Textform() {
  const [text, setText] = useState("");
   const onChangeHandle=(event)=>{
    setText(event.target.value);
   }
   const onUpperHandle=(e)=>{
    e.preventDefault();
    let newText=text.toUpperCase();
    setText(newText)
   }
  return (
    <div className="mx-5 my-5">
      <form>
        <div className="mb-3">
          <label forhtml="exampleFormControlTextarea1" className="form-label">
            Enter your text here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={onChangeHandle}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={onUpperHandle}>
          UPPER CASE
        </button>
        <p>
            Count- {text.length} 
        </p>
      </form>
    </div>
  );
}
