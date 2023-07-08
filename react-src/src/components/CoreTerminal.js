import { useEffect, useState, useRef } from 'react'
import "./css/CoreTerminal.css";


function CoreTerminal() {
    const dataEntry = useRef();

    const [userName, setUserName] = useState("test");
    const [hostName, setHostName] = useState("testHost.com");

    const [commandList, setCommandList] = useState([
        {
            "input": "abc",
            "output": "more abc"
        },
        {
            "input": "abc",
            "output": "more abc"
        },
        {
            "input": "abc",
            "output": "more abc"
        },
        {
            "input": "abc",
            "output": "more abc"
        },
        {
            "input": "abc",
            "output": "more abc"
        },
        {
            "input": "abc",
            "output": "more abc"
        },
        {
            "input": "abc",
            "output": "more abc\nsdsd"
        },
    ]);

    const handleClick = () => {
        dataEntry.current.focus();
    };

    return (
        <div id="TerminalBox" onClick={handleClick}>

            {commandList.length != 0 && commandList.map((command) => {
                return (
                    <div style={{"display":"flex","flexDirection": "column"}}>
                        <p>{userName}@{hostName}: {command.input}</p>
                        <p style={{"whiteSpace": "pre-line"}}>{command.output}</p>
                    </div>
                )
            })}

            <div  style={{"display":"flex"}}>
                <p id="hostString">{userName}@{hostName}:</p>
                <div id="dataEntry" ref={dataEntry} contentEditable></div>
            </div>
        </div>
    );

}


export default CoreTerminal;