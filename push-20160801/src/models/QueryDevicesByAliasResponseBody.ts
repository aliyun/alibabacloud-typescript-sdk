// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicesByAliasResponseBodyDeviceIds extends $dara.Model {
  deviceId?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deviceId)) {
      $dara.Model.validateArray(this.deviceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasResponseBody extends $dara.Model {
  deviceIds?: QueryDevicesByAliasResponseBodyDeviceIds;
  /**
   * @example
   * 6A9FD644-35A5-40E4-89B0-2021CAEDC1B4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: QueryDevicesByAliasResponseBodyDeviceIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deviceIds && typeof (this.deviceIds as any).validate === 'function') {
      (this.deviceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

