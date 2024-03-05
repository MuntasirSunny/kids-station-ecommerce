"use client";

import { useEffect, useState } from "react";
import Product from "./Product";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";

const ProductCategories = ({products}) => {

    const [category, setCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [price, setPrice] = useState(900);

    useEffect(() => {
      const filtered = products.filter((_product)=>{
        const categoryMatch = 
            category === 'all' 
                ? products 
                : _product.categories.some((categ)=> categ.name === category);
        
        const priceMatch = _product.price <= price;
        return categoryMatch && priceMatch;
      });

      setFilteredProducts(filtered);

    }, [category, price, products])
    

  return (
    <section className="min-h-[1200px] py-10">
        <div className="container mx-auto">
            <div className="flex flex-col">
                {/* Sidebar */}
                <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
                    <RadioGroup defaultValue="all" className="flex flex-col gap-6 mb-12">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                                value="all" 
                                id="all" 
                                onClick={()=>setCategory("all")}
                            />
                            <Label htmlFor="all">All</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                                value="toys" 
                                id="toys"
                                onClick={()=>setCategory("toys")}
                            />
                            <Label htmlFor="toys">Toys</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                                value="popular" 
                                id="popular"
                                onClick={()=>setCategory("popular")}
                            />
                            <Label htmlFor="popular">Popular</Label>
                        </div>
                    </RadioGroup>
                    {/* Price Slider */}
                    <div className="max-w-56">
                        <div className="text-lg mb-4 font-medium">
                            Max Price: <span className="text-accent font-semibold ml-2">৳ {price}</span> 
                            <span className="ml-2">(
                                {filteredProducts.length> 1? `${filteredProducts.length} items`: filteredProducts === 0 ? `${filteredProducts.length} items` : `${filteredProducts.length} item`}
                            )
                            </span>
                        </div>
                        <Slider 
                            defaultValue={[900]} 
                            max={2000} 
                            step={1}
                            onValueChange={(value)=> setPrice(value[0])}
                        />
                    </div>
                </aside>
                {/* Product List */}
                <div className="w-full xl:w-[1050px] ml-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                        {filteredProducts.map((product)=> {
                            return (
                                <Product product={product} key={product.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductCategories