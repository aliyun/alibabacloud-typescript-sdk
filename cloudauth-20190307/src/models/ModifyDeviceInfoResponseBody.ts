// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the Duration in the request parameters is not empty, this field represents the start time of the authorization after the device validity period has been extended. One year of Duration is calculated as 365 days. Example: 20180101.
   * 
   * @example
   * 20190401
   */
  beginDay?: string;
  /**
   * @remarks
   * Corresponds to the BizType in the request parameters.
   * 
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @remarks
   * Corresponds to the DeviceId in the request parameters.
   * 
   * @example
   * wd.6ziUffspAeW5FVYbaqmexR-1qwNjM
   */
  deviceId?: string;
  /**
   * @remarks
   * If the Duration in the request parameters is not empty, this field represents the expiration time of the authorization after the device validity period has been extended. One year of Duration is calculated as 365 days. Example: 20180101.
   * 
   * @example
   * 20200330
   */
  expiredDay?: string;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Corresponds to the UserDeviceId in the request parameters.
   * 
   * @example
   * 3iJ1AY$oHcu7mC69
   */
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginDay: 'BeginDay',
      bizType: 'BizType',
      deviceId: 'DeviceId',
      expiredDay: 'ExpiredDay',
      requestId: 'RequestId',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDay: 'string',
      bizType: 'string',
      deviceId: 'string',
      expiredDay: 'string',
      requestId: 'string',
      userDeviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

