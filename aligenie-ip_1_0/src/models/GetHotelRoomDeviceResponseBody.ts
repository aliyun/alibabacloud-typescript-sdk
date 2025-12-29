// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelRoomDeviceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1.0.0-release
   */
  firmwareVersion?: string;
  /**
   * @example
   * af7***536
   */
  hotelId?: string;
  /**
   * @example
   * aa:aa:aa:aa:aa:aa
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  /**
   * @example
   * dsfdsfrgreg
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      hotelId: 'HotelId',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      roomNo: 'RoomNo',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      hotelId: 'string',
      mac: 'string',
      onlineStatus: 'number',
      roomNo: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelRoomDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * vrehvuifdsgrts
   */
  requestId?: string;
  result?: GetHotelRoomDeviceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelRoomDeviceResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

