import React, { useState } from 'react'
export default function Tutor(props) {
    const [text, settext] = useState("");
    const [search, setsearch] = useState("");
    // upercase function
    function handleupercase() {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Upercase Clicked","success")
    }
    // lowercase function 
    const handlelowercase = () => {
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showAlert("Lowercase Clicked","success")
    }
    // search function 
    const handlesearch = () => {
        if (!search.trim()) return alert("Type a word first.");
 const words = text.toLowerCase().split(/\s+/);
        if (words.includes(search.toLowerCase())) {
            alert("Word found")
        }
        else {
            alert("Word Not Found!")
        }
    }
    // eventhandler
    const handlechange = (event) => {
        console.log("onchange");
        settext(event.target.value)
    }


    return (
        <>
           
            <div className={`container backgrounColor-${props.mode === 'dark' ? 'black' : 'light'} text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                <h1
                    //css
                    style={{ marginLeft: "90px", marginTop: "30px", }}>
                    Enter Text Below
                </h1>
                <textarea value={text} rows="8" cols="100" onChange={handlechange}
                    className={` text-${props.mode === 'light' ? 'dark' : 'light'} border-${props.mode === 'light' ? 'dark' : 'light'} `}
                    //css
                    style={{ marginLeft: "90px", marginTop: "3px", backgroundColor: props.mode === 'dark' ? '#00000038' : 'white', }}>

                </textarea>
                <div >
                    <button onClick={handleupercase}
                        // css
                        style={{ margin: "10px 0px 0px 90px" ,backgroundColor:'#24a0ed', color:'white',border:'none',borderRadius:'3px'}}>
                        UperCase
                    </button>
                    {/* lower case */}
                    <button onClick={handlelowercase}
                        // css
                        style={{ margin: "10px 0px 0px 10px" ,backgroundColor:'#24a0ed', color:'white',border:'none',borderRadius:'3px'}}>
                        LowerCase
                    </button>
                    <input
                        // css
                        onChange={(e) => setsearch(e.target.value)}
                        style={{ margin: "10px 5px 0px 10px",padding:'0px   ' }}
                        placeholder="Search Word Here"
                        aria-placeholder='search'
                        value={search}
                    />
                    <button                         // css
                        onClick={handlesearch}
                        style={{ margin: "10px 0px 0px 0px" ,backgroundColor:'#24a0ed', color:'white',border:'none',borderRadius:'3px'}}>
                        Search Text
                    </button>

                </div>
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'} `} style={{ margin: "10px 0px 0px 150px" }}>
                <h1>
                    Text summary
                </h1>
                <p>
                    number of words = {text.split(/\s+/).filter(word=>word !=="").length} <br/>
                     And characters = {text.split(/\s+/).filter(char=>char!=="").length}
                </p>
                <p>
                    Estimated reading time {0.008 * text.split("").length}
                </p>
                <h2>Preview</h2>
            
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
