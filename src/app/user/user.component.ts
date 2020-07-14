import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService }  from '../auth/login-service.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @ViewChild('f', { static: false }) updateForm: NgForm;
  Updateuser = {
    username: '',
    email: '',
    password: '',
  };
  _id: any
  submitted=false;
  constructor(private isAuth: LoginServiceService, private http: HttpClient, private router: Router) { }
  ngOnInit() {}

  onSubmit() {
    this._id = this.isAuth._id
    console.log(this._id)
    this.submitted = true;
    this.Updateuser.username = this.updateForm.value.userData.username;
    this.Updateuser.email = this.updateForm.value.userData.email;
    this.Updateuser.password = this.updateForm.value.userData.password;
      
    this.http.post(`http://localhost:3000/users/${this._id}`,{name: this.Updateuser.username, email: this.Updateuser.email, password: this.Updateuser.password}).subscribe(data => {
      console.log(data)
        console.log("Update has completed successfully")
    })
    console.log(this.Updateuser)
    this.updateForm.reset()
  }
  delete() {
    this._id = this.isAuth._id
    this.http.post(`http://localhost:3000/users/delete/${this._id}`,{}).subscribe(data => {
      console.log(data)
        console.log("Your account has been Deleted")
    })
    this.router.navigate(['/']); 
  }
  

}
