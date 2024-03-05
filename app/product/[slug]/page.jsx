// import AddToCartBtn from "@/components/AddToCartBtn"
import AddToCartBtn from "@/components/AddToCartBtn";
import { toys } from "@/lib/demo";
import {
  ChevronLeft,
  Clock,
  PackageCheck,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {
  const data = toys.find((toy) => toy.slug === slug);

  return data;
};

const ProductDetails = async ({ params }) => {
  const product = await getData(params.slug);

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* Img */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={product.images}
              width={473}
              height={290}
              priority
              alt={product.name}
            />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20}/>
              Back to home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{product.name}</h3>
                <p className="text-lg font-semibold">৳ {product.price}</p>
              </div>
                <p>{product.description}</p>
                <AddToCartBtn text="Add to Cart" btnStyles="btn btn-accent"/>
            </div>
            {/* Info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent"/>
                <p>Free shipping on orders over ৳ 2,000</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent"/>
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent"/>
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
