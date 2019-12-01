import { User } from "./../models/user-model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  readonly APIUrl = "http://localhost:8080/user";

  formData: User;

  addUser(user: User) {
    return this.http.post(this.APIUrl + "/registration", user);
  }
}
