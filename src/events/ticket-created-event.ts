import { Subjects } from "./subjects";

// Interface that strictly binds the TicketCreated event to a data object
export interface TicketCreatedEvent {
    subject : Subjects.TicketCreated;
    data :{
        id : string,
        version : number,
        title : string,
        price : number,
        userId : string,
    }
}