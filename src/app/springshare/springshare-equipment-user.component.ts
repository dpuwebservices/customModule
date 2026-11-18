import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'equipment-user',
  standalone: true,
  template: ``
})
export class SpringshareEquipmentUserComponent implements OnInit {
  
  decodedToken: any;
  userName?: string;
  userGroup?: string;


  ngOnInit() {
    const token = sessionStorage.getItem('primoExploreJwt');
    if (token) {
      try {
        this.decodedToken = jwtDecode<any>(token);
        this.userName = this.decodedToken?.userName ?? null;
        this.userGroup = this.decodedToken?.userGroup ?? null;
      } catch (err) {
        console.error('Invalid token:', err);
      }
    }
  }
}
