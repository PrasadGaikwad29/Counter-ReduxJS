import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,reset } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value );
  const dispatch = useDispatch();
  
  return (
    <div className=" relative w-[100vw] h-[100vh] flex  justify-center items-center bg-[#343151] gap-2 ">
      
      <button className="border-4 border-white text-2xl bg-amber-500 p-1 "
      onClick={()=>dispatch(increment())}
      >Increment</button>
      <br /> <br />

      <div className="border-4 border-black text-2xl bg-green-500 p-1 rounded-md text-center" >{count}</div>
      <br /> <br />

      <button className="border-4 border-white text-2xl bg-amber-500 p-1 rounded-md "
      onClick={()=>dispatch(decrement())}
      >Decrement</button>

      <button className=" border-4 rounded-md -ml-5 absolute justify-center items-center border-white text-2xl bg-blue-500 p-1 mt-32"
      onClick={()=>dispatch(reset())}
      >Reset</button>
      
      <br /> <br />
    </div>
  )
}

export default Counter;
