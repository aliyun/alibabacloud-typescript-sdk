// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserMFAInfoResponseBodyMFADevice } from "./GetUserMfainfoResponseBodyMfadevice";


export class GetUserMFAInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the MFA device that is bound to the RAM user.
   */
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFADevice: 'MFADevice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevice: GetUserMFAInfoResponseBodyMFADevice,
      requestId: 'string',
    };
  }

  validate() {
    if(this.MFADevice && typeof (this.MFADevice as any).validate === 'function') {
      (this.MFADevice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

