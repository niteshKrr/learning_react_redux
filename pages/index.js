import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  newaddress,
} from "../redux/slices/counterSlice";

const index = () => {

  // const count = useSelector((state) => state.counter.value);
  // const name = useSelector((state) => state.counter.name);

  const { value, name, address } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [val, setval] = useState("");


  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>

      <div>the value is : {value}</div>
      <div>the name is : {name}</div>
      <div>the address is : {address}</div>
      <div>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <div>
        <div>
          <input
            onChange={(e) => {
              setval(e.target.value);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            dispatch(incrementByAmount({ amount: val }));
            dispatch(newaddress(val));
            console.log(val);
          }}
        >
          click
        </button>
      </div>
    </div>
  );
};

export default index;
