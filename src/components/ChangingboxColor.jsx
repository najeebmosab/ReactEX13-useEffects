import { useEffect, useRef, useState } from "react";

function ChangingBox(params) {
    const colors = ["red", "green", "blue", "yellow", "black"];
    const changeDiv = useRef(null);
    const [boxColor, setBoxColor] = useState("");
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setBoxColor(colors[counter]);
            setCounter(counter + 1);
        }, 500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (counter < colors.length) {
                setBoxColor(colors[counter]);
                setCounter(counter + 1);
            }
            if (counter == colors.length -1) {
                setTimeout(()=>{changeDiv.current.style.borderRadius = "50%" },2000)
                
            }
        }, 500)
    }, [boxColor])
    return <>
        <div ref={changeDiv} style={{ width: "300px", height: "300px",background:boxColor }}>
        </div>
    </>
}

export { ChangingBox };