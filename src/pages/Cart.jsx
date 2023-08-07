import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} =useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className="w-full h-full flex  justify-center items-center">
     {
      cart.length>0?
      (<div className=" flex w-full h-screen md:flex-row sm:flex-row flex-col md:gap-0 gap-7">
        <div className=" flex flex-col items-center w-[90%] md:w-[55%] ">
          {
            cart.map((item,index)=>{
              return (
                <div className=" mt-10 w-full   md:ml-[10rem] md:w-[50%] ">
                  <CartItem key={item.id} item={item} itemIndex={index} />
                </div>
              );
            })
          }
        </div>
        <div className=" flex flex-col w-[47%] max-h-screen justify-center md:ml-0 ml-8  ">
          <div>
            <div className="text-green-600 font-semibold uppercase text-xl mr-0">Your Cart</div>
            <div className="text-green-600 font-semibold uppercase text-4xl">Summary</div>
           <p>
             <span className=" text-neutral-950 font-black">Total Item : {cart.length}</span>
           </p>
         </div>
          <div className=" flex flex-col mt-7   md:mt-[22rem]">
            <p className=" font-medium text-lg text-neutral-950">Total Amount :<span className=" font-black"> ${totalAmount}</span></p>
            <button className=" bg-green-600 py-[0.8rem] md:w-[65%] rounded-lg mt-5 ">
            Checkout Now
           </button>
         </div>
       </div>
       
      </div>):
      (<div className="h-screen flex flex-col justify-center items-center gap-5">
        <h1 className=" font-semibold text-xl"> Your Cart is Empty !</h1>
        <Link to={"/"}>
          <button className=" bg-green-500 px-16 py-3 rounded-lg">
            Shop Now
          </button>
        </Link>
      </div>)
     }
    </div>
  );
};

export default Cart;
