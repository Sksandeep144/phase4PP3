import { Component,OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user:User
  constructor(private us:UserService ,private route:Router) {
    this.user = new User(0, '','','','')
  }
  ngOnInit(): void {
    let username = this.us.getUsername()
    if(username){
      this.user.name= username 
      this.us.validateUser(username)
      .subscribe(resp=>{
        if(resp.length > 0){
          let obj = resp[0]
          this.user.email = obj.email
          this.user.city = obj.city
          this.user.id = obj.id
        }
        else
        console.log('no user')
      })
    }else{
      alert('please login')
      this.route.navigate(['/login'])
    }

}

}


