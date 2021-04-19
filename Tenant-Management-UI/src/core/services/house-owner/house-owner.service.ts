import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseOwnerDetails } from 'src/core/models/house-owner/HouseOwner';
@Injectable({
  providedIn: 'root',
})
export class HouseOwnerService {
  constructor(private _http: HttpClient) {}
  
  getHouseOwnerDetails(): Observable<HouseOwnerDetails> {
    return this._http.get<HouseOwnerDetails>(
      '../../../assets/House-Owner-API-Responses/HouseOwner.json'
    );
  }
}
