import { useEffect, useRef } from "react";
import "./SpinerComponent.css"
function SpinerComponent(props) {
    const lodingDiv = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            lodingDiv.current.classList.remove("sk-cube-grid");
        }, 3000)
    }, []);
    return <>
        <div ref={lodingDiv} className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
        </div>

       
    </>
}

export { SpinerComponent };