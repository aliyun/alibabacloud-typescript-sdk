// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserMFAInfoResponseBodyMFADevice extends $dara.Model {
  serialNumber?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBody extends $dara.Model {
  isMFAEnable?: boolean;
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isMFAEnable: 'IsMFAEnable',
      MFADevice: 'MFADevice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMFAEnable: 'boolean',
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

