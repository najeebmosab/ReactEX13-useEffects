import { useEffect, useRef } from "react";

function FormComponent() {
    const inputStart = useRef(null)
    useEffect(() => {
        inputStart.current.focus();
    })

    return <>
        <form action="">
            <div>
                <label htmlFor="">User Name</label>
                <input type="text" ref={inputStart}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>
        </form>
    </>

}
export {FormComponent};