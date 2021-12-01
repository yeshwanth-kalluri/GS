import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LogintoService} from '../loginto.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginDetails: any;

  newRoute: any = "login";

  constructor(private router: Router, private toaster: ToastrService, private loginto: LogintoService) {
    this.loginDetails = {
      email: '',
      password: ''
    }
  }


  ngOnInit(){
    this.toaster.info("Login place")
  }

  userLogin() {
    //  debugger
    //  const params: any = `username = ${this.loginDetails.email}&password = ${this.loginDetails.password}&
    //  grant_type = password& checkB2B = true& provider =other &clientId = gaian &
    //  productId = 618bea6b8083b80001ca83d8`
    
     //this.loginto.clientData(params).subscribe((result:any) => {
    //    this.router.navigate(['/home'])
    //  })
     this.router.navigate(['/home'])
  }
      
//     const registeredUser:any = localStorage.getItem('registeredUser')
//     if(registeredUser !== null) {
//       let user = JSON.parse(registeredUser)
//       let userExists = false
//     for (var i =0; i < registeredUser.length; i++) {
//       var userKey = user[i];
//     if(userKey.email === this.loginDetails.email && userKey.password === this.loginDetails.password && userExists === false && this.loginDetails.email !== "" && this.loginDetails.password !== "") {
//       this.loginSuccess()
//       userExists = true
//       this.loginDetails.email = ""
//       this.loginDetails.password = ""
//       this.router.navigate(['/home']);
//     } 
//     else  {
//       if(!userExists) {
//         this.loginFailure()
//       }}

//   }
// }else {
//   this.loginEmpty()
// }

// userSignUp() {
//   this.router.navigate(['/register']);
// }

loginSuccess() {
  this.toaster.success("Logged in sucessfully!")
}
loginFailure() {
  this.toaster.error("Logged Failed")
}
loginEmpty() {
  this.toaster.error("Please Enter valid details")
}

}