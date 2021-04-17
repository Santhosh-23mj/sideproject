export class HouseOwnerDetails {
  id: string;
  houseOwnerId: string;
  houseOwnerDetails: {
    name: string;
    phone: number;
    mailId: string;
    address: string;
    bankAccountNumber: string;
    ifscCode: string;
  };
  houseDetails: HouseDetails[];
}

export class HouseDetails {
  _id: string;
  houseName: string;
  houseAddress: string;
  rent: number;
  lastVacatedDate: Date;
  lastOccupiedDate: Date;
  advance: number;
  ebCharge: number;
  waterCharge: number;
  isOccupied: boolean;
  bhk: number;
}
