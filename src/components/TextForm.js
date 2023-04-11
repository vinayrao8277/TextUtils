import React,{useState} from "react";

export default function TextForm(props) {

  const handleUpClick=()=>{
    // console.log("Uppercase Clicked..."+ text)
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }

  const handleLoClick=()=>{
    // console.log("Uppercase Clicked..."+ text)
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }

  const handleClearClick=()=>{
    // console.log("Uppercase Clicked..."+ text)
    let newText='';
    setText(newText);
    props.showAlert("Text is Cleared!","success");
  }

  const handleCopyClick=()=>{
    // var text=document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text is Copied to Clipboard!","success");
  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!","success");
  }

  const handleOnChange=(event)=>{
    // console.log("on change")
    setText(event.target.value);
  }

  const [text, setText]= useState('');
  return (
    <>
    <div className="container" style={{color : props.mode ==='dark'?'white':'black'}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} placeholder={'Enter the text'} style={{backgroundColor: props.mode ==='light'?'white':'#13466e',
      color: props.mode ==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox"  rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button> 
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color : props.mode ==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:'Nothing to preview!'}</p>
    </div>


    </>
  );
}
