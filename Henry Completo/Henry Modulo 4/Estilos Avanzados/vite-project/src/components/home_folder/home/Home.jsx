import ProductCards from "../../product_folder/product_cards/ProductCards";
import { productsToPreLoad } from "../../../utils/preLoadData";

function Home() {
  return (
    <div>
 <ProductCards products={productsToPreLoad} />
    </div>
  );
}

export default Home;