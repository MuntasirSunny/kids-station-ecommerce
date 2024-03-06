"use client";

import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutBtn = () => {
  const {handleCartClick} = useShoppingCart();
  return (
    <Link href="/checkout">
      <button 
        className="btn btn-primary w-full" onClick={()=> handleCartClick()}>
        Proced to checkout
      </button>
    </Link>
  )
}

export default CheckoutBtn;