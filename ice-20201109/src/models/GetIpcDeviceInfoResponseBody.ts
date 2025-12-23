// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpcDeviceInfoResponseBodyDeviceInfos extends $dara.Model {
  /**
   * @example
   * understand
   */
  capability?: string;
  /**
   * @example
   * d123
   */
  deviceId?: string;
  /**
   * @example
   * 2017-02-11T12:00:00Z
   */
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      deviceId: 'DeviceId',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: 'string',
      deviceId: 'string',
      expireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpcDeviceInfoResponseBody extends $dara.Model {
  deviceInfos?: GetIpcDeviceInfoResponseBodyDeviceInfos[];
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @example
   * 78
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      deviceInfos: 'DeviceInfos',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfos: { 'type': 'array', 'itemType': GetIpcDeviceInfoResponseBodyDeviceInfos },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfos)) {
      $dara.Model.validateArray(this.deviceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

