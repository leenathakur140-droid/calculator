import Home from "./Home.jsx";
import About from "./About.jsx";
import { useState } from "react";
import { useRef } from "react";
function App(){
const [data,setdata]=useState("");
const ref=useRef();
function handle(e){
if(e.target.innerHTML=="="){
    console.log(data);
ref.current.value= eval(data);
console.log(ref.current.value);
}

else{
    setdata(data+e.target.innerHTML);

}
}

return(
<>
<input type="text" ref={ref} value={data}    />
<div className="container" onClick={handle}   >
<div>1</div>
<div>0</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>+</div>
<div>-</div>
<div>*</div>
<div>/</div>
<div>=</div>
<div>AC</div>
<div>x</div>
<div>n<sup>2</sup></div>
<div>%</div>
<div>.</div>
<div>2</div>
</div>
</>
);
}
export default App