"use client";

import Image from 'next/image';
import Link from 'next/link';
import { CgEye, CgShoppingBag } from 'react-icons/cg';
import AddToCartBtn from './AddToCartBtn';

const Product = ({product}) => {

  const popularProductCat = product.categories.find(
    (product) => product.name === 'popular'
  )

  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* Badge */}
          {popularProductCat && 
          <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">popular</div>
          }
          <Image 
            src={product.images}
            width={240}
            height={147}
            alt={product.name}
          />
        </div>
        {/* btn group */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            id={product.id} 
            name={product.name}
            currency={"USD"}
            description={product.description}
            images={product.images}
            price={product.price}
            btnStyles="btn-icon btn-accent" 
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${product.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">{product.categories[0].name}</h5>
      <h4 className="mb-1">{product.name}</h4>
      <div className="text-lg font-bold text-accent">৳{product.price}</div>
    </div>
  )
}

export default Product;