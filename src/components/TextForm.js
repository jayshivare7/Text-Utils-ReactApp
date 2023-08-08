import React, {useState} from 'react'

export default function TextForm(props) {

  const handleClearClick=()=>{
setText('');
props.showAlert("Text Cleared", "success");
  }
  const handleUpClick=()=>{
    console.log("Upper Case button clicked");
setText(text.toUpperCase());
props.showAlert("Converted to Upper Case", "success");
  }
  const handleCopy=()=>{
navigator.clipboard.writeText(text);
props.showAlert("Copied to Clipboard", "success");
  }
  const handleLoClick=()=>{
    console.log("Lower Case button clicked");
setText(text.toLowerCase());
props.showAlert("Converted to Lower Case", "success");
  }

  const handleCapitalizeClick=()=>{
    setText(text.charAt(0).toUpperCase() + text.slice(1));
setText(text.replace(/(?:^|\.)(\s*)([a-z])/g, function(match, space, letter) {
  return  letter.toUpperCase();
}));
props.showAlert("Text Capitalized", "success");
  }

  const handleExtraSpaces=()=>
  {
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert("Extra Spaces Removed", "success");
  }
  const handleOnChange=(event)=>{
    console.log("text is changed");
    setText(event.target.value);
    // now this " setText(event.target.value") " is here to make our textarea capable of having changes in the text area
    // if i do not define this then i will not be able to change the value of the textarea by clicking on the textarea
  
  }
  
  const [text,setText]= useState(''); //this is a useState hook 
  // here the text is the variable and setText is the function which is only capaable of changing value of text
  // now if you want to change the value of text then 
  // this is wrong way --> text="new text is this"
  //  this is correct way --> setText("new text is this");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <div className="mb-3">
       <h1>{props.heading}</h1>
       <textarea className="form-control"   value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
  <button  disabled={text.length==0} className="btn btn-primary"   onClick={handleUpClick} >Convert To UpperCase</button>
  {/* btn btn-primary is a predefined class name in bootstrap and is giving a basic button */}
  <button disabled={text.length===0} className="btn btn-primary mx-3 my-1"  onClick={handleLoClick} >Convert To LowerCase</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-3 my-1"  onClick={handleClearClick} >Clear Text</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-3 my-1"  onClick={handleCapitalizeClick} >Capitalize</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-3 my-1"  onClick={handleCopy} >Copy Text</button>
  <button disabled={text.length===0}  className="btn btn-primary mx-3 my-1"  onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3  " style={{color: props.mode==='dark'?'white':'#042743'}} >
<h1> Your Text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} Words and {text.length} Characters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!=0})} Minutes To Read</p>
<h2>Yor Text Preview</h2>
<p>{text}</p>

    </div>
</>
  );
}
