import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SpringshareEquipmentData {
  Reservations: any[];
  Checkouts: any[];
  data: any[];

}

export interface userData {
  userId: string;
}

@Injectable({
  providedIn: 'root',
})

export class SpringshareEquipmentService {
  constructor(private http: HttpClient) {}

  getSpringshareEquipmentData(url: string, user: string): Observable<SpringshareEquipmentData> {
    return this.http.get<SpringshareEquipmentData>(url, {
      params: {user},
    });
  }
}
