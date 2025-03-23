import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";

import { catchError, throwError } from "rxjs";
import { WishItem } from "../../shared/models/wishItem";

@Injectable({
  providedIn: "root",
})
export class WishService {
  constructor(private http: HttpClient) {}

  // Telling the server that the content its getting is in json format
  private getStandardOptions(): any {
    return {
      header: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  // Below function gets all data from the endpoint (array)
  getWishes() {
    let options = this.getStandardOptions();

    // Below sends a request using this url assets/wishes.json?format=json
    options.params = new HttpParams({
      fromObject: {
        format: "json",
      },
    });

    return this.http
      .get("assets/wishes.json", options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // console see
    if (error.status === 0) {
      console.log(
        "There is an issue with the client or network: ",
        error.error
      );
    } else {
      console.log("Server-side error: ", error.error);
    }

    // user see
    return throwError(
      () =>
        new Error("Cannot retrieve wishes from the server. Please try again.")
    );
  }

  // Adds data to the endpoint(array)
  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set(
      "Authorization",
      "value-need-for-authorization"
    );
    this.http.post("assets/wishes.json", wish, options);
  }
}
