import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isAuthenticated:Boolean = false
  _id: any
  constructor() { }
  isAuth(name: Boolean) {
    this.isAuthenticated = name
  }

}
