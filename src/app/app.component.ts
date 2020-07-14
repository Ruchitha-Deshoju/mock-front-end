import { Component } from '@angular/core';
import { LoginServiceService }  from './auth/login-service.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vip';
  isAuthenticated:Boolean =  false;
  token: ""
  constructor(private isAuth: LoginServiceService, private http: HttpClient){}
  
  isallowed() {
    this.isAuthenticated = this.isAuth.isAuthenticated
    return this.isAuthenticated
  }

    // test(){
  //   console.log("tesitng")
  //   this.http.post("http://localhost:3000/test",{title: "testing"}).subscribe(data => {
  //     console.log(data)
  
  //   })
  // }
  
}
