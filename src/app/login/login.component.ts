import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  ngOnInit(): void {
  }
  constructor(private route:Router,private us:UserService){}

  onSubmit(user:any){
    this.us.validateUser(user.name)
    .subscribe(resp=>{
      if(resp.length>0){
        let obj = resp[0]
        if(obj.password === user.password){
          sessionStorage.setItem('username', user.name)
          this.route.navigate(['/dashboard']);
        }
        else{
          alert('Invalid Credentials')
        }
      }
      else
        alert('Username does not exist')
    })
  }

}
