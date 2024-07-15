import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "./features/counter/CounterSlice";


function App() {

const counter=useSelector(state=>state.counters);
const dispatch=useDispatch();
  const HandleIncrement=()=>{
    dispatch(Increment())
  }
const HandleDecrement=()=>{
 dispatch(Decrement())
}
  return (
    <>
     <div className="flex justify-center h-screen items-center">
     <div>
     <h1 className="text-3xl text-center">{counter.value}</h1>
      <button className="btn bg-blue-500 p-3 rounded-md m-3" onClick={HandleIncrement}>Increment</button>
      <button className="btn bg-red-500 p-3 m-3 rounded-md" onClick={HandleDecrement}> Decrement</button>
     </div>
     </div>
    </>
  )
}

export default App
