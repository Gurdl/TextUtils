import React,{useState} from "react";

export default function TextForm(props) 
{
  //This function convert the text to Upper case
    const setToUpperCase=()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To upper case","success")

    }
    //This function convert the text to Lower case
    const setToLowerCase=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower case","success")

    }
    //This function is used to check the pronunciation of a word
    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent == "Speak") {
          toogle.innerHTML = "Stop"
          props.showAlert("Speaker is On","warning")
      }
      else {
          toogle.innerHTML = "Speak"
          if (toogle.innerHTML = "Speak")
          {
              window.speechSynthesis.cancel()
          }
          props.showAlert("Speaker is Off","warning")
      }
     
  }
  //This will clear the all txt
  const Clear=()=>
  {
    let msg= "";
    setText(msg);
    props.showAlert("Cleared","primary")
  }
  //This function keep changes and display on screen while we write
    const handleOnChange=(event)=>
    {
     
      setText(event.target.value);
    }
    //This will copy the text
   const copy=()=> {
      var copyText = text;
      navigator.clipboard.writeText(copyText);
      props.showAlert("copied to clipboard","dark")
    }
    //REmove the extra space :
    const removeSpace =()=>{
      let vartext=text.split("  ").join("");
      setText(vartext);
      props.showAlert("Extra space is removed","secondary")


    }
    const[text,setText]=useState("");//only setText() will change the text
  return (
    <>
      <div className="container my-2"  style={{color:props.myMode==='dark'?'white':'#042743'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         <h1>{props.heading}</h1>
        </label>
        <textarea 
          className="form-control" value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.myMode==='dark'?'gray':'white',color:props.myMode==='dark'?'white':'black'}}
          id="myBoxId"
          rows="5"
        ></textarea>
        <button className="btn btn-primary mx-2 my-2 " onClick={setToUpperCase}>Convert To upperCase</button>
        <button className="btn btn-primary mx-2 " onClick={setToLowerCase}>Convert To LowerCase</button>
        <button type="submit" className="btn btn-primary mx-2 my-2"  id="toggle" onClick={speak} >Speak</button>
        <button className="btn btn-primary mx-2 " onClick={removeSpace}>Remove Space</button>
        <button className="btn btn-primary mx-2 " onClick={copy}>Copy Text</button>
        <button className="btn btn-danger mx-2 " onClick={Clear}>Clear Text</button>
      </div>
      <div className="container my-1"  style={{color:props.myMode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>  {text.split(" ").length}:words and {text.length}:characters</p>
        <p> {0.008*text.split(" ").length} min, Average time to read words</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Write some text above, to preview"}</p>
      </div>
    </>
  );
}
