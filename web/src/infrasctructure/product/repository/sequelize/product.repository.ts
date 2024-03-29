import Product from "../../../../domain/product/entity/product";
import ProductRepositoryInterface from "../../../../domain/product/repository/product-repository.interface";
import ProductModel from "./product.model";

export default class ProductRepository implements ProductRepositoryInterface {

    async findAll(): Promise<Product[]> {
        
        const products = await ProductModel.findAll();

        return products.map(product => new Product(product.id, product.name, product.price));

    }
    async findById(id: string): Promise<Product> {
        
        var product = await ProductModel.findOne({where: {id: id}});
        
        if(!product) throw new Error("Product not found");

        return new Product(product.id, product.name, product.price);
    }
    async save(entity: Product): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price
        });
    }
    async update(entity: Product): Promise<void> {
        await ProductModel.update({
            name: entity.name,
            price: entity.price
        }, 
        {
            where: {
                id: entity.id
            }
        });
    }


}