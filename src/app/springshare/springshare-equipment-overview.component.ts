import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { SpringshareEquipmentService } from '../services/springshare-equipment-service';
import { SpringshareEquipmentUserService } from '../services/springshare-equipment-user-service';
import { SpringshareEquipmentCheckoutComponent, SpringshareEquipmentCheckoutData } from './springshare-equipment-checkout.component';
import { SpringshareEquipmentReservationComponent, SpringshareEquipmentReservationData } from './springshare-equipment-reservation.component';
import { springshareEquipmentOptions } from './springshare-equipment-options.constant';

@Component({
  selector: 'springshare-equipment-overview',
  standalone: true,
  imports: [CommonModule, SpringshareEquipmentCheckoutComponent, SpringshareEquipmentReservationComponent, NgIf, NgFor],
  templateUrl: './springshare-equipment-overview.component.html',
  styleUrl: './springshare-equipment-overview.component.scss'
})
export class SpringshareEquipmentOverviewComponent implements OnInit {
  
  boxTitle = springshareEquipmentOptions.boxTitle;

  reservations: SpringshareEquipmentReservationData[] = [];
  checkouts: SpringshareEquipmentCheckoutData[] = [];

  isLoading = true;
  equipmentPermitted = true;

  userGroup?: string;
  user?: string;

  constructor(private springshareEquipmentService: SpringshareEquipmentService, private springshareEquipmentUserService: SpringshareEquipmentUserService) {}



  ngOnInit(): void {
    this.user = this.springshareEquipmentUserService.userName;
    this.userGroup = this.springshareEquipmentUserService.userGroup;

    const whitelistGroups = springshareEquipmentOptions.groups;    

    if (whitelistGroups.includes(this.userGroup!)) {
      const url = springshareEquipmentOptions.remoteScript;
      this.springshareEquipmentService.getSpringshareEquipmentData(url, this.user!).subscribe(response => {
        this.reservations = Object.values(response.Reservations || {});
        this.checkouts = Object.values(response.Checkouts || {});
        this.isLoading = false;
      });
    } else {
      this.equipmentPermitted = false;
    }
  }

  hasItems<T>(arr: T[]): boolean {
    return Array.isArray(arr) && arr.length > 0;
  }
}

