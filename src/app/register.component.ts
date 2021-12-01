// import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';

// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   userDetails: any;

//   newRoute: any = "register";

//   fnameError = false
//   lnameError = false
//   emailError = false
//   passwordError = false



//   constructor(private router: Router, private toaster: ToastrService) {
//     this.userDetails = {
//       fname: '',
//       lname: '',
//       email: '',
//       password: ''
//     }
//    }

//   ngOnInit(): void {
//     this.toaster.info('Registration place')
//   }

//   userRegistration() {
//     if(this.userDetails.email === "" && this.userDetails.password === "" ) {
//       this.registrationFailed()

//     }else {
//       if(this.userDetails.email !== "" && this.userDetails.password !== "") {
//         this.userRegister()
//       }
//       else {
//         this.toaster.error("Invalid Credentials")
//       }
//     }
//   }
//   userRegister() {
//     debugger
//     let users : any = []
//     // @ts-ignore
//     if(JSON.parse(localStorage.getItem('registeredUser'))&&JSON.parse(localStorage.getItem('registeredUser')).length > 0) {
//       // @ts-ignore
//       users = JSON.parse(localStorage.getItem('registeredUser'))
//     }
//     users.push(this.userDetails);
//     localStorage.setItem('registeredUser', JSON.stringify(users))
//     this.setDetailsEmpty();
//     this.router.navigate(['/login']);
//   }   

//   setDetailsEmpty() {
//     this.userDetails.fname = '',
//     this.userDetails.lname = '',
//     this.userDetails.email = '',
//     this.userDetails.password = ''

//   }

// registrationFailed() {
//   this.toaster.error("Registration Failed")
// }

//   validateFname() {
//     if(this.userDetails.fname === "") {
//       this.fnameError = true
//     }else {
//       this.fnameError = false
//     }
//   }

//   validateLname() {
//     if(this.userDetails.lname === "") {
//       this.lnameError = true
//     }else {
//       this.lnameError = false
//     }
//   }
//   validateEmail() {
//     if(this.userDetails.email === "") {
//       this.emailError = true
//     }else {
//       this.emailError = false
//     }
//   }
//   validatePassword() {
//     if(this.userDetails.password === "") {
//       this.passwordError = true
//     }else {
//       this.passwordError = false
//     }
//   }
// }

