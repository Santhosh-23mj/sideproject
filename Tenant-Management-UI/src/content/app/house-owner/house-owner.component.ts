import { Component, OnInit } from '@angular/core';
import {
  HouseDetails,
  HouseOwnerDetails,
} from 'src/core/models/house-owner/HouseOwner';
import { HouseOwnerService } from 'src/core/services/house-owner/house-owner.service';

@Component({
  selector: 'app-house-owner',
  templateUrl: './house-owner.component.html',
  styleUrls: ['./house-owner.component.scss'],
})
export class HouseOwnerComponent implements OnInit {
  constructor(private _houseOwner: HouseOwnerService) {}
  houseDetails: HouseDetails[] = [];
  houseOwnerDetails:HouseOwnerDetails;

  ngOnInit(): void {
    this.getHouseDetails();
  }

  getHouseDetails() {
    this._houseOwner.getHouseOwnerDetails().subscribe((response) => {
      if (response) {
        this.houseOwnerDetails = response;
        this.houseDetails = this.houseOwnerDetails.houseDetails;
        console.log(this.houseDetails);
      }
    });
  }
}
