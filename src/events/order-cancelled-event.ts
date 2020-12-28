import { Subjects } from "./subjects";

// Interface that strictly binds the OrderCancelled event to a data object
export interface OrderCancelledEvent {
    subject : Subjects.OrderCancelled;
    data :{
        id : string,
        version :number,
        ticket : {
            id : string,
        }        
    }
}