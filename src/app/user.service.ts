import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class User{
  constructor(public id:number,
    public name:string,
    public password:string,
    public email:string,
    public city:string,){}
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string ='http://localhost:3000/users'
  constructor(private http:HttpClient) { }

  public validateUser(username:string){
    return this.http.get<User[]>(`${this.url}?name=${username}`)
  }
  addUser(user:User)
  {
    return this.http.post<User>(`${this.url}`, user, {
      headers:{'Content-type':'application/json'}
    })
  }
  public getUsername()
  {
    return sessionStorage.getItem('username')
  }
    

}
