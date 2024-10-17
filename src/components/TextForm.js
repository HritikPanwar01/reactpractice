
import React,{useState} from 'react'



export default function TextForm(props) {

    const handleupclick = () =>{
          console.log("uppercase was clicked " + text)
          let newText = text.toUpperCase()
          setText(newText)
          props.showAlert("converted to UpperCase" ,"success")
    }

    const handleloclick = () =>{
        console.log("Lowercase was clicked " + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to LowerCase" ,"success")
    }
     
    const handlecopy = () =>{
      console.log("i am copy ")
      var text = document.getElementById("MyBox");
      text.select()
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied" ,"success")
    }

    const handleExtraSpaces =() =>{
      let newtext = text.split(/[]+/);
      setText(newtext.join(" "))
      props.showAlert("removed extra space" ,"success")
    }

    const ClearText = () =>{
       console.log("clear text")
       let newtext = ( " ")
       setText(newtext)
       props.showAlert("text cleared" ,"success")
    }

    
    const handleOnChange = (event) =>{
        console.log("on change")
        setText(event.target.value)
    }

    const[text, setText] = useState('')
   // setText("hey it is changed") correct way to change the state 
  return (
    <>
    <div className='conatiner' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handlecopy}> Copy Text </button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Clear Extra spaces </button>
    <button className="btn btn-primary mx-1 my-1" onClick={ClearText}> Clear Text </button>
    </div>

    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
       <h1>Your Text summary</h1>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008 * text.split(" ").length} Minutes Read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"enter something in the textbox above  to preview it"}</p>
       </div>
    </>
  )
}
