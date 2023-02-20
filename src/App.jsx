import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Color from "./components/Color"
import {BoxsSlid} from "./components/BoxSlid"
import './App.css'

function App() {
  // const [count, setCount] = useState()
  // console.log(count);
  return (<>
   <Color />
   <BoxsSlid width={"100%"} height={"100vh"} timeOut={1000} timeHidden={4000} color={"red"}/>
   <BoxsSlid width={"80%"} height={"80vh"} timeOut={5000} timeHidden={9000} color={"green"}/>
   <BoxsSlid width={"50%"} height={"50vh"} timeOut={10000} timeHidden={14000} color={"yellow"}/>
   
  </>
  )
}

export default App
