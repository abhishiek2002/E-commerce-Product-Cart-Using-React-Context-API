import React, { useState } from "react";
import { useCardContext } from "../contexts/CardContext";

const Cart = () => {
  const { item, setItem } = useCardContext();
  console.log(item);

  return (
    <div>
      {item.map((product) => (
        <div className="flex justify-between items-center mx-1 my-3 py-1 px-3 relative bg-amber-100 text-black rounded-lg">
          <div className="flex items-center gap-2">
            <img className="w-[50px]" src={product.url} alt="" />
            <h1>{product.name}</h1>
          </div>
          <input
            type="number"
            value={product.quan}
            className="border border-black absolute top-1/2 left-1/2 -translate-1/2 w-10 rounded-sm"
          />
          <div>
            <span>Rs.{product.price}</span>
          </div>
        </div>
      ))}

      <div className="text-center">Total Price : {item.reduce((a, element)=> a=a+ element.price, 0)}</div>
    </div>
  );
};

export default Cart;
