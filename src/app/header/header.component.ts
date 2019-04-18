import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  get isLoggedIn() { 
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
  } }

  // setPageTitle(title: string) {
  //   this.titleService.setTitle(title);
  // }
}