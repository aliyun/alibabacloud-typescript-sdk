// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicInfoQAResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 11:11
   */
  checkInTime?: string;
  /**
   * @example
   * 11:11
   */
  checkOutTime?: string;
  hotelAddress?: string;
  hotelIntroduction?: string;
  hotelMember?: string;
  hotelService?: string;
  parkingExpenses?: string;
  parkingPosition?: string;
  /**
   * @example
   * 123***
   */
  phoneNumber?: string;
  wifiName?: string;
  wifiPassword?: string;
  static names(): { [key: string]: string } {
    return {
      checkInTime: 'CheckInTime',
      checkOutTime: 'CheckOutTime',
      hotelAddress: 'HotelAddress',
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

export class GetBasicInfoQAResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7***726E
   */
  requestId?: string;
  result?: GetBasicInfoQAResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetBasicInfoQAResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

