import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroupSum from "./CounterGroupSum";
import { useSelector } from "react-redux";

function MultiCounter(){
    const size = useSelector((state) => state.size);
    const sum = useSelector((state) => state.sum);

    // const [size, setSize] = useState(0);
    // const [sum, setSum] = useState(0);

    // function updateCounterSize(size){
    //     setSize(size);
    // }

    // function increase(){
    //     setSum(sum + 1);
    // }

    // function decrease(){
    //     setSum(sum - 1);
    // }


    return(
        <div>
            <CounterSizeGenerator></CounterSizeGenerator>
            <CounterGroupSum sum = {sum}></CounterGroupSum>
            <CounterGroup size = {size}></CounterGroup>
        </div>
        
    );
}

export default MultiCounter;