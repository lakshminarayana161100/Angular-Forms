import { Component } from '@angular/core';
import {AsyncValidatorFn, FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginform';
   loginForm! :FormGroup
 uname: any;
  
  

  constructor() { }
c:any
  ngOnInit(): void {
  //login vaildation
  this.loginForm = new FormGroup({
   uname: new FormControl ("",[Validators.required,Validators.minLength(8)]),
    email: new FormControl("",[Validators.required,Validators.minLength(8)]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)]),
  
  });



}
//login button 
  registerSubmited(){
    console.log(this.loginForm.value);
  }

}

