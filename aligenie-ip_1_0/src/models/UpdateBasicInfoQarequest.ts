// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBasicInfoQARequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11:11
   */
  checkInTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11:11
   */
  checkOutTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hotelAddress?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af7***536
   */
  hotelId?: string;
  hotelIntroduction?: string;
  hotelMember?: string;
  hotelService?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parkingExpenses?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parkingPosition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  phoneNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wifiName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wifiPassword?: string;
  static names(): { [key: string]: string } {
    return {
      checkInTime: 'CheckInTime',
      checkOutTime: 'CheckOutTime',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelIntroduction: 'HotelIntroduction',
      hotelMember: 'HotelMember',
      hotelService: 'HotelService',
      parkingExpenses: 'ParkingExpenses',
      parkingPosition: 'ParkingPosition',
      phoneNumber: 'PhoneNumber',
      wifiName: 'WifiName',
      wifiPassword: 'WifiPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInTime: 'string',
      checkOutTime: 'string',
      hotelAddress: 'string',
      hotelId: 'string',
      hotelIntroduction: 'string',
      hotelMember: 'string',
      hotelService: 'string',
      parkingExpenses: 'string',
      parkingPosition: 'string',
      phoneNumber: 'string',
      wifiName: 'string',
      wifiPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

