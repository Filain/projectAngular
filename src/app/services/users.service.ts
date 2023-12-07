import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost, IUser} from "../interfaces/user.inerface";
import {urls} from "../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users.base)
  }
  getById(id:number):Observable<IUser>{
    return this.httpClient.get<IUser>(urls.users.byId(id))
  }


}
