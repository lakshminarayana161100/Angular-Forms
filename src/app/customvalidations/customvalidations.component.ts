import { Component, OnInit } from '@angular/core';
import { AsyncValidator, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customvalidations',
  templateUrl: './customvalidations.component.html',
  styleUrls: ['./customvalidations.component.css']
})
export class CustomvalidationsComponent implements OnInit {
  // form Array 
  testForm = new FormGroup ({
  mobileNums: new FormArray(
      [                                        // mobilenums is keyword , 
        new FormControl(null,Validators.required)
      ]
    )
  })

  constructor(private fb:FormBuilder) {          // form builder constructor , fb is reference variable  , private is security

 }

  ngOnInit(): void {
  }

Add() {                                                                    // add function 
    let mobilenums= this.testForm.get('mobileNums')  as FormArray          // get() method is used
    mobilenums.push(new FormControl(null,Validators.required))
}

delete(i:number) {                                                     
  let mobilenums= this.testForm.get('mobileNums')  as FormArray ;         

  mobilenums.removeAt(i);
  console.log(mobilenums)
}


//form builder

regForm= this.fb.group(
  {
    name:this.fb.control(null),
    email:["",Validators.required],
    
    mobiles:this.fb.array([
      [null,Validators.required],
      [null,Validators.required]
    ]
    )
  }
)
  }


