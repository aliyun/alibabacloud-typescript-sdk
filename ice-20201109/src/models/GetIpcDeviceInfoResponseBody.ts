// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpcDeviceInfoResponseBodyDeviceInfos extends $dara.Model {
  /**
   * @remarks
   * Capability. Valid values:
   * 
   * - understand: understanding
   * 
   * - understand-reid: understanding with reid
   * 
   * - search: search
   * 
   * @example
   * understand
   */
  capability?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * d123
   */
  deviceId?: string;
  /**
   * @remarks
   * Expiration Time. UTC time in the format yyyy-MM-ddTHH:mm:ssZ.
   * 
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
  /**
   * @remarks
   * List of device identity information.
   */
  deviceInfos?: GetIpcDeviceInfoResponseBodyDeviceInfos[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
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

