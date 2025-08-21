// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicesByAccountResponseBodyDeviceIds extends $dara.Model {
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

export class QueryDevicesByAccountResponseBody extends $dara.Model {
  deviceIds?: QueryDevicesByAccountResponseBodyDeviceIds;
  /**
   * @example
   * A8A24108-2AD0-4F6E-81C7-A8A24C2C2AD0
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
      deviceIds: QueryDevicesByAccountResponseBodyDeviceIds,
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

