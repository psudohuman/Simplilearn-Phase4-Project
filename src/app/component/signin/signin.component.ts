import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user: any = {
    email: '', password: ''
  };
  public submitted: boolean = false;
  public message: String = "Invalid Credentials";
public flag: boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form: any) {
    if (form.valid) {
      console.log(this.user);
      this.submitted= true;
      if((this.user.email=="admin@email.com")&&(this.user.password=="admin1"))
      {
      console.log("successful login");
      this.router.navigate(['quizpage']);
      
      }
      else{
        this.flag=true;
        
      }
      
    } else{
      console.log("Invalid Form !");
      this.validateForm(form);
    }
   
  }

  public validateForm(form:any){
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      control.markAsTouched({ onlySelf : true });
    })
  }

  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

}
