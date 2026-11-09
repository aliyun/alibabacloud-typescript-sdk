// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveDeviceCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The SN of the activated device certificate. The SN uniquely identifies a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The common parameter. Each request has a unique ID, which can be used to troubleshoot and locate issues.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

