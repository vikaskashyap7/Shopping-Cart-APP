 import { toast } from "react-hot-toast";
import {MdDelete} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const {cart}=useSelector((state)=>state);

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className="w-full" >
      <div className=" flex ">
       <div className=" md:h-[180px] h-[100px]   md:w-[50%] md:ml-0 ml-3">
         <img src={item.image} alt="" className="h-full  " />
       </div>
        <div className=" flex flex-col gap-3 ml-6 w-[60%] md:w-[106%]">
         <h1 className=" font-semibold">{item.title}</h1>
         <h1>{item.description.split(" ").slice(0,15).join(" ") }</h1>
         <div className=" flex justify-between mt-4">
            <p className="text-green-600 font-semibold">${item.price}</p>
           <div onClick={removeFromCart} className=" ">
             <div className=" w-[35px] h-[35px] rounded-full bg-red-300 flex justify-center items-center">
               <MdDelete />
             </div>
           </div>
          </div>
       </div>
       
      </div>
      { cart.length>1&&
        <div className="md:w-full w-screen h-1 bg-slate-900 mt-8"></div>
      }
    </div>
    
  );
};

export default CartItem;
