import React from "react";
import { useCardContext } from "../contexts/CardContext";

const Card = ({ name, price, url, quan=1 }) => {
    const {item, setItem} = useCardContext();
    
  return (
    <div className="flex flex-col rounded-lg justify-center py-3 px-4 max-w-72 m-2  bg-amber-100 text-black shadow-2xs shadow-white">
      <img
        src={url}
        alt=""
        className="rounded-lg hover:shadow-2xs transition-all transition-normal w-[230px] max-h-[170px]"
      />
      <h1 className="text-lg font-medium">{name}</h1>
      <h3 className="flex gap-1.5">
        <b>Price:</b> <span>Rs.{price}</span>{" "}
      </h3>
      <button onClick={() => setItem([...item, {name, price, url, quan}])} className="bg-orange-700 rounded-lg py-1 cursor-pointer text-center hover:bg-orange-800 ">
        Add to 🛒cart 
      </button>
    </div>
  );
};

export default Card;
