// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  available?: boolean;
  /**
   * @example
   * ae296f3b04a58a05b30c95f****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      deviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBodyDeviceCheckInfos extends $dara.Model {
  deviceCheckInfo?: CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceCheckInfo: 'DeviceCheckInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCheckInfo: { 'type': 'array', 'itemType': CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo },
    };
  }

  validate() {
    if(Array.isArray(this.deviceCheckInfo)) {
      $dara.Model.validateArray(this.deviceCheckInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBody extends $dara.Model {
  deviceCheckInfos?: CheckDevicesResponseBodyDeviceCheckInfos;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCheckInfos: 'DeviceCheckInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCheckInfos: CheckDevicesResponseBodyDeviceCheckInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceCheckInfos && typeof (this.deviceCheckInfos as any).validate === 'function') {
      (this.deviceCheckInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

