import React, { useState } from 'react'
export default function TextForm(props) {
	const handleUpClick = () => {
		// console.log("Uppercase was clicked" + text)
		let newText = text.toUpperCase()
		setText(newText)
	}
	const handleLoClick = () => {
		
		let newText = text.toLowerCase()
		setText(newText)
	}
	const handleOnChange = (event) => {
		// console.log("On Change")
		setText(event.target.value)
	}
	const handleCopy = () =>{
		var text = document.getElementById("myBox")
		text.select();
		navigator.clipboard.writeText(text.value)
	}
	const handleExtraSpaces = ()=>{
		let newText = text.split(/[ ]+/)
		setText(newText.join(" "))
	}
	const [text, setText] = useState('Enter text here')
	return (
			<>
		<div className='Container'>
			<h1>{props.heading} </h1>
			<div className="mb-3">

				<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

			</div>
			<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
			<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
			<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
			<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Space Remove</button>
		</div>
		<div className="container my-3">
			<h1>Your text summary</h1>
			<p>{text.split(" ").length} words and {text.length} characters</p>
			<p>{0.008 * text.split(" ").length} Minutes read</p>
			<h2>Privew</h2>
			<p>{text}</p>
		</div>
			</>
	)
}
