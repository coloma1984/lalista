import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private router: Router, private http: HttpClient) { }

  signUp(user){
    return this.http.post(this.URL + '/signup', user);
  }

  signIn(user){
    return this.http.post(this.URL + '/signin', user);
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
