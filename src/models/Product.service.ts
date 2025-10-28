import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { Message, HttpCode } from "../libs/Errors";

class ProductService {
    private readonly productModel;

    constructor() {
        this.productModel = ProductModel;
    }

    /** SPA **/

    /** SPA **/
    public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
           return await this.productModel.create(input); 
        }    
        catch (err) {
            console.error("Error, model:createNewProduct:", err)
        throw new Errors(HttpCode.BAD_REQUEST, Message.CEATE_FAILED);
  }
    }
}

export default ProductService;