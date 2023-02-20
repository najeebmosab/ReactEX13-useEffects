import { useEffect, useRef, useState } from "react"
import "./BoxSlid.css"
function BoxsSlid(props) {
    const showClass = useRef(null);
    // const [backgroundColor,setBackgroundColor]=useState(props.color);
    // const [width,setWidth]=useState(props.width);
    // const [height,setHeight]=useState(props.height);
    // const [left,setLeft]=useState(props.left);
    // const [opacity,setOpacity]=useState(props.opacity);
    // const [transition,setTransition]=useState("transition:opacity 1s ease-in-out,left 1s ease-in-out");
    useEffect(() => {
        setTimeout(() => {
            showClass.current.classList.add("show");
            showClass.current.style.backgroundColor = props.color;
            showClass.current.style.width = props.width;
            showClass.current.style.height = props.height;
            showClass.current.style.height = props.height;
        }, props.timeOut)

        setTimeout(() => {
            
            showClass.current.classList.remove("show");
            
        }, props.timeHidden)

    }, []);
    return <>
        <div className="box" ref={showClass}></div>
    </>
}

export { BoxsSlid }