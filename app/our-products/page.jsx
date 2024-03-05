import ProductCategories from "@/components/ProductCategories";
import { toys } from "@/lib/demo";

const OurProductsPage = async() => {

    const products = toys;

  return (
    <div>
        <ProductCategories products={products}/>
    </div>
  )
}

export default OurProductsPage