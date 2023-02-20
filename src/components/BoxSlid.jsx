import { useEffect, useState } from "react"
import "./BoxSlid.css"
function BoxsSlid(props) {
    // const [backgroundColor,setBackgroundColor]=useState(props.color);
    // const [width,setWidth]=useState(props.width);
    // const [height,setHeight]=useState(props.height);
    // const [left,setLeft]=useState(props.left);
    // const [opacity,setOpacity]=useState(props.opacity);
    // const [transition,setTransition]=useState("transition:opacity 1s ease-in-out,left 1s ease-in-out");
    useEffect(() => {
        setTimeout(() => {
            const div =  document.querySelector(".box");
            div.classList.add("show");
            div.style.backgroundColor = props.color;
            div.style.width = props.width;
            div.style.height = props.height;
            div.style.height = props.height;
        }, props.timeOut)

        setTimeout(() => {
            const div =  document.querySelector(".box");
            div.classList.remove("show");
            
        }, props.timeHidden)

    }, []);
    return <>
        <div className="box"></div>
    </>
}

export { BoxsSlid }