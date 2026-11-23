// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceInfoResponseBodyDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * The account bound to the device.
   * 
   * @example
   * test@aliyun.com
   */
  account?: string;
  /**
   * @remarks
   * The alias bound to the device.
   * 
   * @example
   * test_alias,test_alias2
   */
  alias?: string;
  /**
   * @remarks
   * The device brand.
   */
  brand?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * a64ae296f3b04a58a05b30c95****
   */
  deviceId?: string;
  /**
   * @remarks
   * The APNs token of the iOS device.
   * 
   * @example
   * 5ecc7b4012aaa801b63******5543ccbda6b4930d09629e936e1ac4b762a7df
   */
  deviceToken?: string;
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * iOS
   */
  deviceType?: string;
  /**
   * @remarks
   * The last online time.
   * 
   * @example
   * 2018-03-27T02:19:40Z
   */
  lastOnlineTime?: string;
  /**
   * @remarks
   * The device model.
   */
  model?: string;
  /**
   * @remarks
   * Indicates whether the device is online.
   * 
   * @example
   * false
   */
  online?: boolean;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 133********
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the push feature is enabled.
   * 
   * @example
   * true
   */
  pushEnabled?: boolean;
  /**
   * @remarks
   * The tags bound to the device.
   * 
   * @example
   * test_tag,test_tag2
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      alias: 'Alias',
      brand: 'Brand',
      deviceId: 'DeviceId',
      deviceToken: 'DeviceToken',
      deviceType: 'DeviceType',
      lastOnlineTime: 'LastOnlineTime',
      model: 'Model',
      online: 'Online',
      phoneNumber: 'PhoneNumber',
      pushEnabled: 'PushEnabled',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      alias: 'string',
      brand: 'string',
      deviceId: 'string',
      deviceToken: 'string',
      deviceType: 'string',
      lastOnlineTime: 'string',
      model: 'string',
      online: 'boolean',
      phoneNumber: 'string',
      pushEnabled: 'boolean',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The device details.
   */
  deviceInfo?: QueryDeviceInfoResponseBodyDeviceInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EEF262B-EA7D-41DC-89B9-20F3D1E28194
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: QueryDeviceInfoResponseBodyDeviceInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

