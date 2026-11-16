import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IllRequestData {
  title: string;
  author: string;
  status: string;
  type: string;
  count: number;
}


@Component({
  selector: 'ill-request',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div>
        <p>Request Type: {{ item.type }}</p>
        <p>Title: {{ item.title }}</p>
        <p>Author: {{ item.author }}</p>
        @if (item.status) {
          <p>Status: {{ item.status }} </p>
        }
      </div>
    </div>
  `
})
export class IllRequestComponent {
  @Input() item!: IllRequestData;
}
