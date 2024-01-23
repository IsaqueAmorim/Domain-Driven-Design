import Customer from "../../../domain/entity/customer";
import Order from "../../../domain/entity/order";
import OrderItem from "../../../domain/entity/order_item";
import OrderService from "../../../domain/service/order.service";

describe("Order service unit tests", () => {
    
    it("should get total of all orders", () => {
        
        const item = new OrderItem("i1","Item 1",100,1, "p1");
        const item2 = new OrderItem("i2","Item 2", 200,2, "p2");

        const order = new Order("o1","c1",[item]);
        const order2 = new Order("o2","c2",[item,item2]);

        const total = OrderService.total([order, order2]);

        expect(total).toBe(600);
    });

    it("should place an order", () => {
        const customer = new Customer("c1", "Customer 1");
        const item1 = new OrderItem("i1","Item 1",100,1, "p1");

        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(50);
        expect(order.total()).toBe(100);
    });

});