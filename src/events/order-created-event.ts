import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

// Interface that strictly binds the OrderCreated event to a data object
export interface OrderCreatedEvent {
    subject : Subjects.OrderCreated;
    data :{
        id: string,
        version : number,
        status: OrderStatus,
        userId : string,
        expiresAt : string,
        ticket :{
            id : string,            
            price : number
        }
    }
}