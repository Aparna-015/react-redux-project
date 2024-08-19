import React from 'react'

import{useDispatch, useSelector} from 'react-redux';
import { addTocart,removeFromCart  } from '../../store/slice/cart-slice';



function Products({products}) {

  const dispatch =useDispatch();
  const { cart } = useSelector((state) => state);



  function handleAddToCart(){
    dispatch(addTocart(products))
  }
  function handleRemoveFromCart() {

    
    
    dispatch(removeFromCart(products.id));
  }
   
  return (
    <div>
        <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={products.image}
            alt={products.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {products.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
        <button
            onClick={
              cart.some((item) => item.id === products.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-yellow-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === products.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>        </div>
        </div>
    </div>
  )
}

export default Products