import { useState } from "react";
import {useDispatch} from "react-redux";
import {UPDATE_SIZE} from "./constants/constants.js"


function CounterSizeGenerator(props){
    const [size,setSize] = useState(0);
    const dispatch = useDispatch();

    function handleChangeSize(event){
        var sizeValue = parseInt(event.target.value)
        setSize(sizeValue);
        //props.updateSize(sizeValue);
        dispatch({type: UPDATE_SIZE, payload: sizeValue});
    }

    return(
        <div>
            <span>Size:</span>
            <input value={size} type = "number" onChange = {handleChangeSize}></input>
        </div>
    )
}
export default CounterSizeGenerator;