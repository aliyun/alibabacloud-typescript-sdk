// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserDeviceResponseBodyDevice } from "./GetUserDeviceResponseBodyDevice";


export class GetUserDeviceResponseBody extends $dara.Model {
  device?: GetUserDeviceResponseBodyDevice;
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: GetUserDeviceResponseBodyDevice,
      requestId: 'string',
    };
  }

  validate() {
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

