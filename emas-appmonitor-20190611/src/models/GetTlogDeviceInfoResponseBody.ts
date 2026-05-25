// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlogDeviceInfoResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 1
   */
  appBuild?: string;
  /**
   * @example
   * 1001@iphoneos
   */
  appId?: string;
  /**
   * @remarks
   * appKey
   * 
   * @example
   * 1001
   */
  appKey?: string;
  /**
   * @example
   * V20250224102631
   */
  appVersion?: string;
  /**
   * @example
   * Hinova
   */
  brand?: string;
  /**
   * @example
   * 1739808000000
   */
  clientTime?: number;
  /**
   * @example
   * ad-0001t9c1b6y48kqcd44s-105
   */
  deviceId?: string;
  /**
   * @example
   * ASUS_X00GD
   */
  deviceModel?: string;
  geo?: string;
  /**
   * @example
   * 10
   */
  id?: string;
  /**
   * @example
   * 460049842500442
   */
  imsi?: string;
  /**
   * @example
   * 0:0:0:0:0:ffff:8ccd:be5
   */
  ip?: string;
  /**
   * @example
   * android
   */
  os?: string;
  /**
   * @example
   * 1
   */
  osVersion?: string;
  /**
   * @example
   * 1739808000000
   */
  serverTime?: number;
  /**
   * @example
   * 1739808000000
   */
  updateTime?: number;
  /**
   * @remarks
   * userId
   * 
   * @example
   * userId
   */
  userId?: string;
  /**
   * @example
   * userNick
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      appBuild: 'AppBuild',
      appId: 'AppId',
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      brand: 'Brand',
      clientTime: 'ClientTime',
      deviceId: 'DeviceId',
      deviceModel: 'DeviceModel',
      geo: 'Geo',
      id: 'Id',
      imsi: 'Imsi',
      ip: 'Ip',
      os: 'Os',
      osVersion: 'OsVersion',
      serverTime: 'ServerTime',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appBuild: 'string',
      appId: 'string',
      appKey: 'string',
      appVersion: 'string',
      brand: 'string',
      clientTime: 'number',
      deviceId: 'string',
      deviceModel: 'string',
      geo: 'string',
      id: 'string',
      imsi: 'string',
      ip: 'string',
      os: 'string',
      osVersion: 'string',
      serverTime: 'number',
      updateTime: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTlogDeviceInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 500
   */
  errorCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  model?: GetTlogDeviceInfoResponseBodyModel;
  /**
   * @example
   * AB8AB5EC-9636-421D-AE7C-BB227DFC95B0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      model: GetTlogDeviceInfoResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

