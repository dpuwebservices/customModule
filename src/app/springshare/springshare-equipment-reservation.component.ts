import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SpringshareEquipmentReservationData {
  title: string;
  location: string;
  fromDate: string;
  toDate: string;
  status: string;
  count: number;
}

@Component({
  selector: 'equipment-reservation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div>
        <p>Item: {{ item.title }}</p>
        <p>Reserved at {{ item.location }}</p>
        <p>From {{ item.fromDate }} to {{ item.toDate }}</p>
      </div>
    </div>
  `
})
export class SpringshareEquipmentReservationComponent {
  @Input() item!: SpringshareEquipmentReservationData;
}
