// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMFADevicesForUserResponseBodyMFADevices } from "./ListMfadevicesForUserResponseBodyMfadevices";


export class ListMFADevicesForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MFA devices.
   */
  MFADevices?: ListMFADevicesForUserResponseBodyMFADevices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B9982ED-FD0D-5622-8EA0-7B768685DCE7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of MFA devices.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      MFADevices: 'MFADevices',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevices: { 'type': 'array', 'itemType': ListMFADevicesForUserResponseBodyMFADevices },
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.MFADevices)) {
      $dara.Model.validateArray(this.MFADevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

