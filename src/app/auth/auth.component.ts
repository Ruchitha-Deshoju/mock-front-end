import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService }  from './login-service.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  @ViewChild('f', { static: false }) signupForm: NgForm;
  Signupuser = {
    username: '',
    email: '',
    password: '',
  };
  Loginuser = {
    email: '',
    password: ''
  }
  submitted=false;
  constructor(private http: HttpClient, private router: Router, private isAuth: LoginServiceService) { }

  ngOnInit() {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    this.submitted = true;
    if(this.isLoginMode) {
      this.Loginuser.email = this.signupForm.value.userData.email;
      this.Loginuser.password = this.signupForm.value.userData.password;
      
      
      this.http.post("http://localhost:3000/users/login",{email: this.Loginuser.email, password: this.Loginuser.password}).subscribe(data => {
          console.log("The User has logged in successfully")
          this.isAuth._id = data["user"]["_id"]
          console.log(this.isAuth._id)

          this.isAuth.isAuthenticated = true
          this.router.navigate(['/home']); 
      })
      console.log(this.Loginuser)

    } else {
      this.Signupuser.username = this.signupForm.value.userData.username;
      this.Signupuser.email = this.signupForm.value.userData.email;
      this.Signupuser.password = this.signupForm.value.userData.password;
      
      this.http.post("http://localhost:3000/users",{name: this.Signupuser.username, email: this.Signupuser.email, password: this.Signupuser.password}).subscribe(data => {
          console.log("signUp has complated successfully")
          this.isAuth._id = data["user"]["_id"]
          this.isAuth.isAuthenticated = true
          this.router.navigate(['/home']); 
      })
      console.log(this.Signupuser)
    }
    this.signupForm.reset()
  }


  // test(){
  //   console.log("tesitng")
  //   this.http.post("http://localhost:3000/test",{title: "testing"}).subscribe(data => {
  //     console.log(data)
  
  //   })
  // }

}


