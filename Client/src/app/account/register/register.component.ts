
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { timer, of } from 'rxjs';
import { switchMap, map, finalize, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  errors: string[] | null=null;


  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  complexPassword = "(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$"
  registerForm =this.fb.group({
    displayName:['',Validators.required],
    email:['',[Validators.required, Validators.email], [this.validateEmailNotTaken()]],
    password:['',[Validators.required,Validators.pattern(this.complexPassword)]],
  })


  /*

  createRegisterForm() {
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [null,
        [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
        [this.validateEmailNotTaken()]
      ],
      password: [null, [Validators.required]]
    });
  }*/

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe({
      next:() =>  this.router.navigateByUrl('/shop'),
      error: error => this.errors = error.errors
   
    })
  }

  
  validateEmailNotTaken(): AsyncValidatorFn {
    return (control:AbstractControl) => {
     return control.valueChanges.pipe(
      debounceTime(1000),
      take(1),
      
        switchMap(() => {
    
          return this.accountService.checkEmailExists(control.value).pipe(
            map (result => result ? { emailExists: true } : null),
            finalize(()=> control.markAsTouched()))}))
          
          
        }
      
      }
  } 


