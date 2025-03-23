import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class EventService {
  private subject = new Subject();

  // Object that is going to emit the event calls the subjects next method
  // Then passes in the next object
  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload });
  }

  //   This gives us access to the subscribe method
  //   So an object that is going to subscribe
  //   Will receive this event object with the EventsName and payload
  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (eventName === nextObj.eventName) {
        callback(nextObj.payload);
      }
    });
  }
}
