import { useState, useEffect } from "react";

function Color(){
    const [favoriteColor, setFavoriteColor] = useState("blue")
        useEffect(()=>{
            setTimeout(()=>{
                setFavoriteColor("red")
            }, 1000)
        },[])
       

return <>
<h1>my favorite color is {favoriteColor}</h1>
<div id="emptyDiv"></div>
</>
}
export default Color;