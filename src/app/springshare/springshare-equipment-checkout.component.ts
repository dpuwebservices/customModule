import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SpringshareEquipmentCheckoutData {
  title: string;
  location: string;
  due: string;
  status: string;
  count: number;
}

@Component({
  selector: 'equipment-checkout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div>
        <p>Item: {{ item.title }}</p>
        <p>Checked out from {{ item.location }}</p>
        <p>Due: {{ item.due }}.</p>
      </div>
    </div>
  `
})
export class SpringshareEquipmentCheckoutComponent {
  @Input() item!: SpringshareEquipmentCheckoutData;
}
